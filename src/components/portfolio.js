import m from "mithril";
const SELECTED_REPOS = [
  "kb-knowledge",
  "Inner-sanctum",
  "lift-mate",
  "golf-pro",
  "present-v3",
  "photo-scramble",
  "sette-bambini",
  "show-time",
  "hacker-news-ionic",
];
const parseRepoDescription = (description = "") => {
  const [summary, image, meta] = (description || "")
    .split("~")
    .map((value) => value && value.trim());
  return { summary, image, meta };
};

const toProject = (repo) => {
  const { summary, image, meta } = parseRepoDescription(repo.description);

  return {
    name: repo.name,
    url: repo.homepage,
    image,
    summary,
    meta: meta || [repo.language, "GitHub Pages"].filter(Boolean).join(" · "),
  };
};

const isPortfolioRepo = (repo) => {
  //just using these:
  return SELECTED_REPOS.includes(repo.name);
  //
  // const { image } = parseRepoDescription(repo.description);
  // return image;
};

const getRepos = () => {
  return m.request({
    url: "https://api.github.com/users/boazblake/repos?sort=updated&per_page=100",
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  });
};

const ProjectCard = {
  view: ({ attrs: { project, index } }) =>
    m(
      "a.work-card",
      {
        href: project.url,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `Open ${project.name}`,
      },
      m("span.work-number", String(index + 1).padStart(2, "0")),
      m(
        ".work-image-frame",
        m("img", { src: project.image, alt: "", loading: "lazy" }),
      ),
      m(".work-card-copy", [
        m("p.work-meta", project.meta || "Selected work"),
        m("h2", project.name),
        m("p", project.summary),
        m("span.work-link", "Visit project →"),
      ]),
    ),
};

const Portfolio = () => {
  const state = {
    status: "loading",
    projects: [],
    errors: null,
  };

  return {
    oninit: async () =>
      await getRepos().then(
        (repos) => {
          state.projects = [...repos.filter(isPortfolioRepo).map(toProject)];
          state.status = "loaded";
        },
        (errors) => {
          state.status = "failed";
          state.errors = errors;
        },
      ),
    view: () =>
      m("section.work-section", [
        m(".work-header", [
          m("p.work-kicker", "Selected work"),
          m("h1", "Github Projects and Experiments."),
          m("p", "A selection of links to work. Each item opens in a new tab."),
        ]),
        state.status === "failed" &&
          m(".work-notice", [
            m("strong", "GitHub projects could not be loaded."),
            m("span", "Showing available featured work instead."),
          ]),
        state.status === "loading" &&
          m(".work-notice", "Loading live project index…"),
        m(
          ".work-grid",
          state.projects.map((project, index) =>
            m(ProjectCard, { project, index }),
          ),
        ),
      ]),
  };
};

export { Portfolio };

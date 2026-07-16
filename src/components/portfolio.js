import m from "mithril";

const CACHE_TTL = 60 * 60 * 1000;
const REPOS_KEY = "repos";
const REPOS_DATE_KEY = "repos-date";

const staticProjects = [
  {
    name: "bonhamacres.org",
    url: "https://bonhamacres.org",
    image: "images/baca.webp",
    summary:
      "Neighborhood civic association website maintained as webmaster, built with Mithril and Express.",
    meta: "Civic web · Mithril · Express",
  },
];

const readCachedRepos = () => {
  const cachedAt = Number(localStorage.getItem(REPOS_DATE_KEY));
  const cachedRepos = localStorage.getItem(REPOS_KEY);

  if (!cachedAt || !cachedRepos || Date.now() - cachedAt > CACHE_TTL) {
    localStorage.removeItem(REPOS_KEY);
    localStorage.removeItem(REPOS_DATE_KEY);
    return null;
  }

  return JSON.parse(cachedRepos);
};

const saveRepos = (repos) => {
  localStorage.setItem(REPOS_DATE_KEY, `${Date.now()}`);
  localStorage.setItem(REPOS_KEY, JSON.stringify(repos));
  return repos;
};

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
  const { image } = parseRepoDescription(repo.description);
  return repo.homepage && repo.homepage.includes("boazblake") && image;
};

const getRepos = () => {
  const cachedRepos = readCachedRepos();
  if (cachedRepos) return Promise.resolve(cachedRepos);

  return m
    .request({
      url: "https://api.github.com/users/boazblake/repos?sort=updated&per_page=100",
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    })
    .then(saveRepos);
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
      m(".work-image-frame", m("img", { src: project.image, alt: "", loading: "lazy" })),
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
    projects: staticProjects,
    errors: null,
  };

  return {
    oninit: () =>
      getRepos().then(
        (repos) => {
          state.projects = [...staticProjects, ...repos.filter(isPortfolioRepo).map(toProject)];
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
          m("h1", "Projects with a live surface."),
          m(
            "p",
            "A focused index of shipped websites and interface work. Each item opens in a new tab so the work can speak for itself.",
          ),
        ]),
        state.status === "failed" &&
          m(".work-notice", [
            m("strong", "GitHub projects could not be loaded."),
            m("span", "Showing available featured work instead."),
          ]),
        state.status === "loading" && m(".work-notice", "Loading live project index…"),
        m(
          ".work-grid",
          state.projects.map((project, index) => m(ProjectCard, { project, index })),
        ),
      ]),
  };
};

export { Portfolio };

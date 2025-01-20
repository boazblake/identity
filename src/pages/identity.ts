import m from "mithril";

// Resume Data Object
const resumeData = [
  { date: "2024 - Present", content: "Senior Developer at XYZ Corp." },
  { date: "2022 - 2024", content: "Lead Developer at ABC Ltd." },
  { date: "2019 - 2022", content: "Full Stack Developer at MNO Inc." },
  { date: "2017 - 2019", content: "Junior Developer at Startup Co." },
  { date: "2015 - 2017", content: "Intern at Tech Innovators" },
];

// Resume Component
const Resume = {
  view: () =>
    m("section.resume-section", { id: "resume" }, [
      m("h2.w3-center", "Resume"),
      m("div.timeline-container", [
        // Timeline Line
        m("div.timeline-line"),
        // Resume Cards with Connector Logic
        resumeData.map((entry, index) =>
          m(
            "div.resume-card-container",
            { class: index % 2 === 0 ? "top" : "bottom" },
            [
              m(
                "div.timeline-connector",
                { style: { height: `${index % 2 === 0 ? 50 : -50}px` } }, // Adjust connector height
              ),
              m("div.w3-card resume-card", [
                m("h3.w3-text-indigo", entry.date),
                m("p", entry.content),
              ]),
            ],
          ),
        ),
      ]),
    ]),
};
const About = {
  view: () =>
    m(
      "section.w3-center.w3-animate-opacity",
      { style: { background: "#042532", color: "#fff" } },
      [
        m("h1.w3-jumbo", "Boaz Blake"),
        m("p.w3-large", "Full Stack JS Developer"),
      ],
    ),
};

// Portfolio Section Placeholder
const Portfolio = {
  view: () =>
    m("section", { id: "portfolio" }, [
      m("h2.w3-center", "Portfolio"),
      m("p.w3-center", "Portfolio content goes here..."),
    ]),
};

export const Identity = () => {
  return {
    view: () => [m(About), m(Resume), m(Portfolio)],
  };
};

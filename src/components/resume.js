import m from "mithril";

const link = ({ href, title }) =>
  `<a class="w3-border-bottom" target="_blank" href=${href}>${title}</a> `;

const triggerDownload = () => (e) => {
  e.preventDefault();
  const link = document.createElement("a");
  link.href = "files/BOAZ_RESUME.pdf";
  link.setAttribute("download", "BOAZ_BLAKE_FRONTEND_DEVELOPER_RESUME.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const resumeDto = [
  {
    heading: "Professional Summary",
    data: [
      {
        info: [
          `Frontend software engineer with 9+ years of professional experience building enterprise web and cross-platform mobile applications. Strong in TypeScript, Vue, NativeScript-Vue, AureliaJS, Tailwind CSS, Vite, responsive UI, data visualization, PWA and offline behavior, WCAG accessibility, automated testing, and WebSocket-driven real-time interfaces. Delivers reusable component systems, production performance improvements, and end-to-end features spanning Node.js services, REST APIs, C#/.NET integration, and SQL.`,
        ],
      },
    ],
  },
  {
    heading: "Technical Skills",
    data: [
      {
        title: "Core",
        info: ["TypeScript, JavaScript (ES6+), HTML5, CSS3, Node.js, C#, SQL"],
      },
      {
        title: "Frontend",
        info: [
          "Vue.js, NativeScript-Vue, AureliaJS, Tailwind CSS, Sass, LESS, responsive/mobile-first UI, reusable component systems, Figma",
        ],
      },
      {
        title: "Real-Time & Data",
        info: [
          "WebSockets, streaming UI, event-driven state, charting and data-visualization libraries, REST, GraphQL, PWA, service workers, offline support",
        ],
      },
      {
        title: "Quality & Delivery",
        info: [
          "Vite, Webpack, ESBuild, Babel, automated unit/integration/end-to-end testing, WCAG accessibility, cross-browser compatibility, GitHub Actions, Jenkins, Git",
        ],
      },
    ],
  },
  {
    heading: "Professional Experience",
    data: [
      {
        title: "Senior Front-End Web Systems Developer",
        location: "Empyrean Benefit Solutions | Houston, TX",
        date: "Apr 2019 – Present",
        info: [
          "Lead frontend development of enterprise web and mobile products used by business analysts, technical directors, and client-facing teams, converting complex operational workflows into responsive, maintainable interfaces.",
          "Architect and maintain reusable TypeScript and Vue component systems using Tailwind CSS, Sass, and Figma specifications, with WCAG-aligned accessibility, mobile-first behavior, and cross-browser consistency.",
          "Build data-rich interfaces and visualizations with charting libraries, improving readability and rendering performance for time-sensitive user workflows.",
          "Architected a TypeScript conversational assistant for Vue web and NativeScript mobile clients, using WebSockets for streamed text and audio, reconnection, session resume, and synchronized client-server state.",
          "Implemented PWA and offline-capable behavior with service workers, caching, resilient network-state handling, and mobile-focused interaction patterns.",
          "Develop TypeScript and Node.js services, integrate REST and GraphQL APIs, and contribute to C#/.NET Entity Framework handlers and SQL-backed workflows.",
          "Delivered an end-to-end delayed-configuration capability ahead of schedule by owning SQL table design, API development, and a complex frontend workflow.",
          "Reduced operational processing time by 20% through UX redesign; strengthened releases with automated frontend tests, Vite/Webpack tooling, GitHub Actions, Jenkins, code reviews, and mentoring.",
        ],
      },
      {
        title: "Front-End Web Developer",
        location: "Empyrean Benefit Solutions | Houston, TX",
        date: "Aug 2016 – Apr 2019",
        info: [
          "Developed responsive applications with Vue, AureliaJS, and NativeScript, including EmpyreanGO, the company’s first cross-platform mobile application.",
          "Built an employee onboarding application connecting HR and customer-service workflows, integrated backend APIs, and created maintainable Sass-based styling patterns.",
        ],
      },
    ],
  },
  {
    heading: "Education",
    data: [
      {
        title: "Front End Web Development",
        location: "The Iron Yard | Houston, TX",
        date: "2016",
        info: ["Front-End Web Development"],
      },
      {
        title: "Doctoral Studies",
        location: "University of Houston | Houston, TX",
        date: "2011 – 2014",
        info: ["Statistics instruction and NASA-funded research."],
      },
      {
        title: "B.S. Sports Medicine | cum laude",
        location: "James Madison University | Harrisonburg, VA",
        date: "2010",
        info: ["Bachelor of Science in Sports Medicine, cum laude."],
      },
    ],
  },
];
const Resume = {
  view: ({ attrs: { state } }) => {
    return m(
      "#resume",
      { style: { height: state.height } },

      m(
        "a.button.w3-right.sticky",
        {
          ontouchstart: triggerDownload(),
          onclick: triggerDownload(),
          tabIndex: "1",
          target: "_blank",
          rel: "noopener noreferrer",
          href: "/files/The_Resume_Of_Boaz_Blake.pdf",
          download: "The_Resume_Of_Boaz_Blake.pdf",
          style: { zIndex: 1000 },
        },
        "Download Resume",
      ),

      resumeDto.map((dto) =>
        m(
          ".",
          m(
            "h3.sticky.resume-title.w3-white.bg-white",
            {
              style: {
                whiteSpace: "nowrap",
              },
            },
            dto.heading,
          ),
          dto.data.map((data) =>
            m(
              "table.w3-table",
              m(
                "tr",
                m("td.italic.w3-left", data.title),
                m("td.w3-center", data.location),
                m("td.w3-right", data.date),
              ),
              m(
                "tr",
                m(
                  "td",
                  { colspan: 5 },
                  m(
                    "table",
                    data.info.map((info) => m("tr", m("td", info))),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  },
};

export { Resume };

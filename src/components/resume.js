import m from "mithril";

const triggerDownload = () => (e) => {
  e.preventDefault();
  const link = document.createElement("a");
  link.href = "files/Boaz_Blake_Resume.pdf";
  link.setAttribute("download", "Boaz_Blake_Resume.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const resumeDto = [
  {
    heading:
      "Senior Software Engineer | Frontend-Focused Full Stack | TypeScript, Vue, Node.js",
    data: [
      {
        info: [
          "Houston, TX | (347) 420-3251 | boazblake@protonmail.com | github.com/boazblake | boazblake.github.io/identity",
        ],
      },
    ],
  },
  {
    heading: "Professional Summary",
    data: [
      {
        info: [
          "Software engineer with nearly 10 years of experience building, testing, debugging, and supporting enterprise web and mobile systems.",
          "Strong in TypeScript, JavaScript, Node.js, Vue, APIs, real-time systems, automated testing, production troubleshooting, and evaluating software behavior across system boundaries.",
        ],
      },
    ],
  },
  {
    heading: "Core Skills",
    data: [
      {
        title: "Frontend",
        info: [
          "TypeScript, JavaScript, Vue.js, NativeScript-Vue, AureliaJS, HTML, CSS",
        ],
      },
      {
        title: "Full Stack",
        info: [
          "Node.js, REST, GraphQL, WebSockets, SQL, C#/.NET integration, Entity Framework request handlers, API design and integration",
        ],
      },
      {
        title: "Engineering",
        info: [
          "Automated testing, CI/CD, GitHub Actions, Jenkins, code review, requirements validation, production debugging, technical documentation",
        ],
      },
    ],
  },
  {
    heading: "Professional Experience",
    data: [
      {
        title: "Empyrean Benefit Solutions | Houston, TX",
        date: "2016 - Present",
        info: [],
      },
      {
        title: "Senior Front End Web System Developer",
        location: "Empyrean Benefit Solutions | Houston, TX",
        date: "Apr 2019 - Present",
        info: [
          "Delivered a cross-platform AI conversational assistant in under four months using Vue and NativeScript-Vue, owning frontend architecture and partnering with a backend engineer on AI-agent orchestration, live-agent handoffs, internal API integration, WebSocket streaming, reconnection, and session recovery.",
          "Diagnose production failures across browsers, physical mobile devices, APIs, and real-time connections using structured logs, reproducible test cases, and system-boundary analysis.",
          "Develop TypeScript and Node.js services, integrate REST and GraphQL APIs, and contribute to C#/.NET Entity Framework request handlers and SQL-backed business workflows.",
          "Review code, mentor developers, document decisions, and work with product, design, business, and backend teams to validate requirements, assess tradeoffs, and deliver production software.",
          "Delivered a delayed-configuration capability ahead of schedule by owning SQL table design, API development, validation, and a complex frontend workflow.",
        ],
      },
      {
        title: "Front End Web Developer",
        location: "Empyrean Benefit Solutions | Houston, TX",
        date: "Aug 2016 - Apr 2019",
        info: [
          "Worked directly with business users and analysts to understand legacy client-configuration workflows before rebuilding them, preventing known usability problems from carrying into the modern application.",
          "Redesigned a multi-page legacy .NET workflow as an Aurelia data table with expandable rows, reducing the typical path to record details from about four navigation clicks to one.",
          "Implemented supporting SQL schema changes, C#/.NET and Entity Framework request handlers, REST APIs, validation, and Aurelia frontend features; also delivered Vue and NativeScript applications including EmpyreanGO.",
        ],
      },
    ],
  },
  {
    heading: "Selected Projects",
    data: [
      {
        title: "Sanctum",
        info: [
          "Private React Native voice journal using on-device Whisper transcription and local LLM reflection, with no backend, analytics, or network dependency.",
        ],
      },
      {
        title: "Lift-Mate",
        info: [
          "Ionic and Mithril fitness application with real-time MediaPipe pose, hand, and face landmark detection across web and native mobile.",
        ],
      },
      {
        title: "Golf-Pro",
        info: [
          "Pose-AI data project that collects professional golf swing video, normalizes body coordinates, and prepares training data for real-time swing feedback.",
        ],
      },
    ],
  },
  {
    heading: "Education & Research",
    data: [
      {
        title: "The Iron Yard",
        location: "Houston, TX",
        date: "2016",
        info: ["Front-End Web Development"],
      },
      {
        title: "University of Houston",
        location: "Houston, TX",
        date: "2011 - 2014",
        info: [
          "Doctoral Studies - Human space exploration research supported by NASA HRP Grant #NNX12AF04G; graduate teaching assistant for statistics and biomechanics.",
        ],
      },
      {
        title: "James Madison University",
        location: "Harrisonburg, VA",
        date: "2010",
        info: ["B.S. Sports Medicine, cum laude"],
      },
    ],
  },
];
const Resume = {
  view: () => {
    return m(
      "#resume",
      m(
        "a.button.resume-download",
        {
          ontouchstart: triggerDownload(),
          onclick: triggerDownload(),
          tabIndex: "1",
          target: "_blank",
          rel: "noopener noreferrer",
          href: "files/Boaz_Blake_Resume.pdf",
          download: "Boaz_Blake_Resume.pdf",
          style: { zIndex: 1000 },
        },
        "Download Resume",
      ),

      resumeDto.map((dto) =>
        m(
          ".",
          m(
            "h3.resume-title",
            {
              style: {
                whiteSpace: "nowrap",
              },
            },
            dto.heading,
          ),
          dto.data.map((data) =>
            m(
              "table.resume-table",
              m(
                "tr",
                m("td.resume-role", data.title),
                m("td.resume-location", data.location),
                m("td.resume-date", data.date),
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

import m from "mithril";

const link = ({ href, title }) =>
  `<a class="w3-border-bottom" target="_blank" href=${href}>${title}</a> `;

const triggerDownload = () => (e) => {
  e.preventDefault();
  var link = document.createElement("a");
  link.href = "/files/The_Resume_Of_Boaz_Blake.pdf";
  link.setAttribute("download", "The_Resume_Of_Boaz_Blake.pdf");

  // Append link to body
  document.body.appendChild(link);

  // Trigger click
  link.click();

  // Remove link from body
  document.body.removeChild(link);
};

const resumeDto = [
  {
    heading: "Summary",
    data: [
      {
        info: [
          "Self-driven and motivated Software Engineer with extensive experience in software development, project management, and team leadership.",
          "Skilled in enhancing application performance, streamlining workflows, and improving user experience.",
        ],
      },
    ],
  },
  {
    heading: "Professional Experience",
    data: [
      {
        title: "Sr Front End Developer",
        location: "Empyrean Benefits Solution | Houston, TX",
        date: "April 2019 – Present",
        info: [
          "Lead developer of the main in-house application used by business analysts and Tech Directors for client configurations.",
          "Port legacy .NET applications to modern front-end frameworks, including SQL database updates, API creation, and maintaining the Node-Express proxy server.",
          "Manage multiple projects, including “dockerizing” the JS web client app and NodeJS proxy app to enhance developer experience.",
          "Onboard and train junior and offshore developers on the codebase and best practices.",
          "Collaborate with Tech Directors to improve UX/UI and application efficiency, reducing operation times.",
          "Delivered a previously delayed feature ahead of schedule by independently managing the infrastructure, creating SQL tables, APIs, and a complex front-end feature.",
          "Currently focused on streamlining workflows and enhancing functionality and performance.",
        ],
      },
      {
        title: "Front End Developer",
        location: "Empyrean Benefits Solution | Houston, TX",
        date: "August 2016 – April 2019",
        info: [
          "Developed applications in multiple frameworks, including C#, PHP, Python, JavaScript, NativeScript, Vue, and AureliaJS.",
          "Built the first company mobile application (EmpyreanGO) using Vue and NativeScript.",
          "Created an employee onboarding application using AureliaJS with access integration for HR and customer service.",
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
        date: "February 2016 – April 2016",
        info: [
          "Intensive 3-month course on HTML, JavaScript, and CSS with a focus on SOLID OOP principles.",
          "Supplemented learning with the Harvard CS50 course and studied functional programming, Lambda calculus, and category theory.",
          "Built a responsive event organizer using ReactJS and MongoDB.",
        ],
      },
      {
        title:
          "PhD Human Space Exploration | Exercise Immunology (Epigenetic Inheritance) – Not Completed",
        location: "University of Houston | Houston, TX",
        date: "September 2011 – May 2014",
        info: [
          "NASA HRP Grant #NNX12AF04G: Studied the effects of gravitational forces on spinal cord excitability.",
          "Researched exercise as an environmental stressor and its impact on epigenetic inheritance.",
        ],
      },
      {
        title: "Bachelor of Science in Sports Medicine | cum laude",
        location: "James Madison University | Harrisonburg, VA",
        date: "August 2007 – May 2010",
        info: [
          "Focused on athletic injuries in professional and amateur athletes.",
        ],
      },
    ],
  },
  {
    heading: "Background",
    data: [
      {
        title: "Tactical Firearms Instructor",
        location: "Top Gun Range | Houston, TX",
        date: "January 2016 – August 2016",
        info: [
          "Educated public and private sectors on all aspects of gun ownership and usage.",
          "Focused on tactical application integrating armed and unarmed scenarios.",
        ],
      },
      {
        title: "PhD Research Assistant",
        location: "University of Houston | Houston, TX",
        date: "September 2011 – May 2014",
        info: [
          "Taught undergraduate classes on biomechanics, statistics, and health and fitness.",
          "Researched the effects of spaceflight on the nervous system and genetic impacts of environmental stressors on immune function.",
        ],
      },
      {
        title: "Anti-Terrorist Officer/Bodyguard",
        location: "Israel Defense Forces | Israel",
        date: "October 2000 – December 2005",
        info: [
          "Served as a paratrooper before working as an anti-terrorist officer.",
          "Provided close protection services to individuals and teams throughout Israel.",
        ],
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
                    data.info.map((info) => m("tr", m.trust(info))),
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

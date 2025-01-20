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
          "Self-driven Software Engineer with extensive experience in software development, leadership, and performance optimization, enhancing user experience and workflow efficiency.",
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
          "Lead developer for in-house application serving over 100 analysts and directors, managing client configurations.",
          "Ported legacy .NET to modern frameworks, improving load times by 30%.",
          "Managed 'dockerizing' projects, reducing development setup time by 50%.",
          "Mentored 10+ developers, enhancing productivity and code quality.",
          "Delivered complex features ahead of schedule, improving infrastructure and reducing operation times by 25%.",
          "Streamlined workflows, enhancing functionality and performance.",
        ],
      },
      {
        title: "Front End Developer",
        location: "Empyrean Benefits Solution | Houston, TX",
        date: "August 2016 – April 2019",
        info: [
          "Developed applications across C#, PHP, Python, JavaScript, Vue, NativeScript, and AureliaJS.",
          "Built first company mobile app (EmpyreanGO) using Vue and NativeScript.",
          "Created employee onboarding app with AureliaJS, integrating HR and customer service access.",
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
          "Completed intensive course on HTML, CSS, JavaScript with focus on SOLID principles.",
          "Built responsive event organizer with ReactJS and MongoDB.",
        ],
      },
      {
        title: "PhD in Human Space Exploration (Incomplete)",
        location: "University of Houston | Houston, TX",
        date: "September 2011 – May 2014",
        info: [
          "Research focused on gravitational effects on spinal cord excitability and exercise immunology.",
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
        title: "PhD Research Assistant",
        location: "University of Houston | Houston, TX",
        date: "September 2011 – May 2014",
        info: [
          "Taught undergraduate classes on biomechanics, statistics, and health/fitness.",
          "Researched spaceflight's impact on the nervous system and environmental stressors on immune function.",
        ],
      },
      {
        title: "Anti-Terrorist Officer/Bodyguard",
        location: "Israel Defense Forces | Israel",
        date: "October 2000 – December 2005",
        info: [
          "Enhanced situational awareness and strategic planning through paratrooper and anti-terror roles.",
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

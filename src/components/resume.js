import m from "mithril";

const link = ({ href, title }) =>
  `<a class="w3-border-bottom" target="_blank" href=${href}>${title}</a> `;

const triggerDownload = () => (e) => {
  e.preventDefault();
  var link = document.createElement("a");
  link.href = "/identity/files/BOAZ_RESUME.pdf";
  link.setAttribute("download", "BOAZ_BLAKE_FRONTEND_DEVELOPER_RESUME.pdf");

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
          `Results-driven Senior Software Engineer with over 8 years of experience in frontend
          development, specializing in ReactJS and modern JavaScript frameworks. Proven expertise 
          in architecting scalable web applications, optimizing UI performance, and leading design 
          system implementations. Adept at collaborating with cross-functional teams, mentoring 
          junior developers, and integrating RESTful APIs and GraphQL. Passionate about delivering 
          high-fidelity, user-centric solutions with a focus on innovation and excellence.`,
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
          `Lead developer for the company’s primary in-house application, utilized by business 
            analysts and Tech Directors for client configurations, transitioning a legacy .NET 
            application to a modern ReactJS-style (AureliaJS) frontend architecture.`,
          `Architected and maintained scalable frontend solutions, enhancing performance 
          through efficient rendering strategies and modern caching techniques.`,
          `Designed and implemented a reusable component library to ensure UI consistency 
          across applications, collaborating with designers to translate Figma mockups into 
          pixel-perfect interfaces.`,
          `Optimized build processes using Webpack and Babel, and enhanced CI/CD 
          pipelines with GitHub Actions to improve developer efficiency and onboarding.`,
          `Integrated RESTful APIs and C# .NET Entity Framework request handlers, ensuring 
          seamless data consumption and performance.`,
          `Mentored junior developers and conducted code reviews, establishing best 
          practices for frontend development and reducing operation times by 20% through 
          UX/UI enhancements.`,
          `Delivered a delayed configuration feature ahead of schedule by independently 
          architecting infrastructure, including SQL table creation, API development, and a 
          complex frontend interface.`,
        ],
      },
      {
        title: "Front End Developer",
        location: "Empyrean Benefits Solution | Houston, TX",
        date: "August 2016 – April 2019",
        info: [
          `Developed responsive web applications across multiple frameworks (ReactJS, Vue, 
                AureliaJS, NativeScript), including the company’s first mobile app (EmpyreanGO) 
                built with Vue and NativeScript.`,
          `Created an employee onboarding application in AureliaJS, integrating HR and 
                customer service access with high design fidelity.`,
          `Optimized CSS using SASS and styled-components, improving load times and 
                maintainability of UI components.`,
          `Collaborated with backend teams to integrate APIs, enhancing application 
                functionality and user experience. `,
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
          `Completed an intensive 3-month course focusing on HTML, JavaScript, CSS, and 
          SOLID principles of OOP.`,
          `Built a responsive Event Organizer application using ReactJS and MongoDB, 
           emphasizing performance optimization and modern frontend practices.`,
          `Supplemented learning with Harvard CS50 (David J. Malan), Functional 
           Programming (Brian Lonsdorf), and Category Theory (Bartosz Milewski) courses.`,
        ],
      },
      {
        title: "PhD in Human Space Exploration (Incomplete)",
        location: "University of Houston | Houston, TX",
        date: "September 2011 – May 2014",
        info: [
          `Conducted research on gravitational forces and epigenetic inheritance under NASA 
            HRP Grant #NNX12AF04G.`,
        ],
      },
      {
        title: "Bachelor of Science in Sports Medicine | cum laude",
        location: "James Madison University | Harrisonburg, VA",
        date: "August 2007 – May 2010",
        info: [
          `Focused on athletic injury prevention and treatment, developing strong analytical 
                and problem-solving skills.`,
        ],
      },
    ],
  },
  {
    heading: "Background",
    data: [
      {
        title: "Tactical Firearms Instructor & Range Safety Officer",
        location: "Top Gun Range | Houston, TX",
        date: "January 2016 – August 2016",
        info: [
          `Trained individuals in tactical applications and safety protocols, enhancing 
                  communication and leadership skills.`,
        ],
      },

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
          `Served as a Paratrooper, providing close protection in high-risk environments, 
              honing adaptability and decision-making under pressure.`,
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

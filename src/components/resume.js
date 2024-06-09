import m from 'mithril'

const link = ({ href, title }) => `<a class="w3-border-bottom" target="_blank" href=${href}>${title}</a> `


const triggerDownload = () => (e) => {
  e.preventDefault();
  var link = document.createElement('a');
  link.href = '/files/The_Resume_Of_Boaz_Blake.pdf';
  link.setAttribute('download', 'The_Resume_Of_Boaz_Blake.pdf');

  // Append link to body
  document.body.appendChild(link);

  // Trigger click
  link.click();

  // Remove link from body
  document.body.removeChild(link);
}

const resumeDto = [
  // {
  //   heading: 'Summary',
  //   data: [
  //     {
  //       info: [
  //         'Self-driven and motivated JavaScript Developer with extensive experience in front-end development, project management, and team leadership.', 'Skilled in enhancing application performance, streamlining workflows, and improving user experience.'
  //       ],
  //     },

  //   ]
  // },
  {
    heading: 'Professional Experience',
    data: [
      {
        title: 'Sr Front End Web System Developer ',
        location: 'Empyrean Benefits Solution | Houston, Tx',
        date: 'April 2019 – Present',
        info: [
          'Currently I am lead developer on the main in-house application used by all business analysts and Tech Directors for every client configuration.',
          'Manage multiple projects, including onboarding junior and peer developers as well as training offshore talent in codebase and best practices.',
          'Conduct research and collaborate with Tech Directors to identify pain points within the application and enhance UX/UI, reducing operation times.',
          'Recently delivered a previously delayed feature ahead of schedule by delineating value streams and managing development independently.',
          'My current focus is streamlining existing workflows and enhancing functionality and performance.'
        ],
      },
      {
        title: 'Front End Web Developer ',
        location: 'Empyrean Benefits Solution | Houston, Tx',
        date: 'August 2016 – April 2019',
        info: ['Developer on applications in multiple frameworks (C#, PHP, JS, NativeScript, Vue, AureliaJS).',

          'Developer on the first company mobile application created (EmpyreanGO) built in Vue and NativeScript.',

          'Created an application for onboarding employees from multiple companies built in AureliaJS, integrating access for HR and customer service.']
      },
    ]
  },
  {
    heading: 'Education',
    data: [
      {
        title: 'Front End Web Development',
        location: 'The Iron Yard | Houston, Tx',
        date: 'February 2016 - April 2016',
        info: [`Intensive 3-month course on HTML, JS and CSS with an emphasis on SOLID principles of OOP.I supplemented my learning with ${link({
          href: "https://pll.harvard.edu/course/cs50-introduction-computer-science", title: "David J. Malan’s Harvard CS50 course"
        })} as well as reading everything I can by Douglas Crockford, Alan Kay, and studying Functional Programming and Lambda-calculus through ${link({
          href: "https://egghead.io/courses/professor-frisby-introduces-composable-functional-javascript",
          title: "Brian Lonsdorf Egghead course"
        })} and ${link({ href: 'https://www.youtube.com/watch?v=JH_Ou17_zyU', title: 'Bartosz Milewski category theory course.' })}`, 'Built a fully functioning responsive Event organizer using ReactJS and mongoDB.'],
      },
      {
        title: 'PhD Human Space Exploration | Exercise Immunology (epigenetic inheritance) – Not Completed.',
        location: 'University of Houston | Houston, Tx',
        date: 'September 2011-May 2014',
        info: [`${link({
          href: "https://taskbook.nasaprs.com/tbp/index.cfm?action=public_query_taskbook_content&TASKID=9035"
          , title: "NASA HRP Grant #NNX12AF04G"
        })}: Studied the effects of gravitational forces on the excitability of the spinal cord.`, 'Studied the effects of exercise as an exogenous environmental stress factor on epigenetic inheritance.']
      },
      {
        title: 'Bachelor of Science in Sports Medicine  | cum laude ',
        location: 'James Madison University | Harrisonburg, VA',
        date: 'August 2007 – May 2010',
        info: ['Intensive program focused on Athletic injuries to the professional and amateur athlete.']
      },
    ]
  },
  {
    heading: 'Background',
    data: [
      {
        title: 'Tactical Firearms Instructor',
        location: 'Top Gun Range | Houston Tx',
        date: 'January 2016 - August 2016',
        info: ['Educate public and private sector market on all aspects of gun ownership and usage.', ' Focus on tactical application with integration of armed and unarmed situations.'],
      },
      {
        title: 'PhD Research Assistant',
        location: 'University of Houston | Houston Tx',
        date: 'September 2011 - May 2014',
        info: ['Taught Undergraduate science classes on Biomechanics, Statistics and health and fitness while studying the effects of spaceflight on the nervous system and the genetic effects of environmental stressors on immune function.']
      },
      {
        title: 'Israel Defense Forces, Anti-Terrorist Officer/Bodyguard.',
        location: 'Israel',
        date: 'October 2000 – December 2005',
        info: ['Served as a Paratrooper in the IDF before working as anti-terrorist officer and provided close protection services for individuals and teams traveling throughout Israel.']
      },
    ]
  },

]

const Resume = {
  view: ({ attrs: { state } }) => {
    return m('#resume',
      { style: { height: state.height } },

      m('a.button.w3-right.sticky', { onclick: triggerDownload(), tabIndex: "1", target: "_blank", rel: "noopener noreferrer", href: '/files/The_Resume_Of_Boaz_Blake.pdf', download: 'The_Resume_Of_Boaz_Blake.pdf', style: { zIndex: 1000, } }, 'Download Resume'),

      resumeDto.map(dto => m('.',
        m('h3.sticky.resume-title.w3-white.bg-white', {
          style: {
            whiteSpace: 'nowrap'
          }
        }, dto.heading),
        dto.data.map(data =>
          m('table.w3-table', m('tr',
            m('td.italic.w3-left', data.title),
            m('td.w3-center', data.location),
            m('td.w3-right', data.date)),
            m('tr',
              m('td', { colspan: 5 },
                m('table', data.info.map(info => m('tr', m.trust(info)))))
            )
          )
        )
      ),
      )
    )
  }
}


export { Resume }

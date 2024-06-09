import m from 'mithril'
import { Links } from '@/components/links'
import { Resume } from '@/components/resume'
import { Portfolio } from '@/components/portfolio'
import { BottomSheet, State } from '@/components/bottom-sheet'

const getRightStyle = ({ settings: { profile } }) => {
  switch (profile) {

    case 'phone':
      return { height: "140%" }
    case "tablet":
      return { height: "100%", justifyContent: 'center' }
  }
}

const getLeftStyle = ({ settings: { profile } }) => {
  switch (profile) {
    case 'phone':
      return { height: "100vh", }
    case "tablet":
      return { height: "100%", justifyContent: 'center' }
  }
}



const portfolioState = State()
const resumeState = State()

const SheetBtn = {
  view: ({ attrs: { action, title } }) => m("button", {
    onclick: action,
    "type": "button",
    "id": "open-sheet",
    "aria-controls": "sheet"
  },
    title)
}

const SheetBtns = {
  view: () => m('.w3-cell-row.w3-block.w3-center.w3-margin.w3-padding',
    m('.w3-cell', m(SheetBtn, { title: 'Resume', action: () => resumeState.hideSheet = false })),
    m('.w3-cell', m(SheetBtn, { title: 'Portfolio', action: () => portfolioState.hideSheet = false }))
  )
}

const getClassList = mdl => {
  switch (mdl.settings.profile) {
    case 'phone': return 'column.items-center.justify-evenly'
    case 'tablet': return 'row.items-center'
    case 'desktop': return 'column.items-center.justify-evenly'
  }
}

export const Home = {
  view: ({ attrs: { mdl } }) =>
    m(`#home.${getClassList(mdl)}.w3-container`, { style: { height: '90dvh' } },

      m('section.w3-padding.column.justify-evenly.w3-half.w3-container.overflow',
        { style: getLeftStyle(mdl) },

        m("h1.w3-large.w3-center",
          "Full Stack JS Developer"
        ),

        m("img#me.w3-block.w3-content.hide", {
          oncreate: ({ dom }) =>
            dom.onload = () => requestAnimationFrame(() =>
              requestAnimationFrame(() =>
                dom.classList.replace('hide', 'show')
              )
            )
          ,
          src: "images/me.webp",
        }),
        m("p.w3-row.w3-center",
          m('a.w3-col', { href: "https://boazblake.github.io/identity", target: '-blank' }, "https://BoazBlake.Github.Io/identity"),
          m('a.w3-col', { href: "mailto:boazblake@protonMail.com" }, "BoazBlake@ProtonMail.com"),
          m('a.w3-col', { href: 'tel' }, "347-420-3251")
        ),

      ),
      m('section.column.justify-evenly.w3-half.w3-padding.overflow', { style: getRightStyle(mdl) },
        m(
          "p.w3-center",
          "Self-driven and motivated Software Developer with extensive experience in front-end development, project management, and team leadership."
        ), m(
          "p.w3-center",
          "Skilled in enhancing application performance, streamlining workflows, and improving user experience."
        ),
        m(SheetBtns),
        m(Links),

        m(BottomSheet, { state: resumeState, render: (state) => m(Resume, { mdl, state }) }),
        m(BottomSheet, { state: portfolioState, render: () => m(Portfolio, { mdl }) },)
      ),
    )
}

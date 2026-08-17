import m from "mithril";
import { Links } from "@/components/links";
import { Mask } from "@/components/mask";
import { Resume } from "@/components/resume";
import { Portfolio } from "@/components/portfolio";
import { BottomSheet, State } from "@/components/bottom-sheet";

const sheetState = State();

const SheetBtn = {
  view: ({ attrs: { action, title, label, variant = "secondary" } }) =>
    m(
      `button.action-button.${variant}`,
      {
        onclick: action,
        type: "button",
        "aria-label": label,
        "aria-controls": "sheet",
      },
      title,
    ),
};

export const Home = {
  view: ({ attrs: { mdl } }) =>
    m(
      "#home.portfolio-home",
      m(
        "section.hero-visual",
        m(".portrait-shell", [
          m("img#me.show", {
            src: "images/me.webp",
            alt: "Boaz Blake",
          }),
        ]),
        m(Mask),
        m(".contact-strip", [
          m(Links, { mdl }),
          m(
            "a.contact-action",
            {
              href: "tel:+3474203251",
              "aria-label": "Call Boaz Blake",
            },
            m("img", {
              alt: "",
              src: "https://cdn-icons-png.flaticon.com/512/15/15874.png",
            }),
          ),
          m(
            "a.contact-action",
            {
              href: "mailto:boazblake@protonMail.com",
              "aria-label": "Email Boaz Blake",
            },
            m("img", {
              alt: "",
              src: "https://cdn-icons-png.flaticon.com/512/542/542638.png",
            }),
          ),
        ]),
      ),
      m(
        "section.hero-copy",
        m("p.kicker", "Frontend architecture · design systems · product UI"),
        m("h2", "I turn complex product workflows into clear, durable interfaces."),
        m(
          "p.hero-lede",
          `Frontend software engineer with 9+ years building TypeScript, Vue, NativeScript-Vue, AureliaJS, and API-driven product surfaces for teams that need speed without losing craft.`,
        ),
        m(
          "p.hero-support",
          `I specialize in real-time interfaces, offline-capable web apps, reusable component systems, WCAG accessibility, and pragmatic integration across Node.js, REST, C#/.NET, and SQL-backed workflows.`,
        ),
        m(".cred-grid", [
          m(".cred-card", [m("strong", "9+ yrs"), m("span", "Enterprise frontend delivery")]),
          m(".cred-card", [m("strong", "Real-time"), m("span", "WebSockets, streaming UI, offline support")]),
          m(".cred-card", [m("strong", "Systems"), m("span", "Vue, TypeScript, APIs, accessibility")]),
        ]),
        m(".primary-actions", [
          m(SheetBtn, {
            title: "View Resume",
            label: "Open resume",
            variant: "primary",
            action: () => (sheetState.activePanel = "resume"),
          }),
          m(SheetBtn, {
            title: "See Work",
            label: "Open portfolio",
            action: () => (sheetState.activePanel = "portfolio"),
          }),
        ]),
      ),
      m(BottomSheet, {
        state: sheetState,
        render: (panel) => panel === "resume" ? m(Resume) : m(Portfolio),
      }),
    ),
};

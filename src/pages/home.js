import m from "mithril";
import { Links } from "@/components/links";
import { Mask } from "@/components/mask";
import { Resume } from "@/components/resume";
import { Portfolio } from "@/components/portfolio";
import { BottomSheet, State } from "@/components/bottom-sheet";

const getRightStyle = ({ settings: { profile } }) => {
  switch (profile) {
    case "desktop":
      return {};
    case "phone":
      return {};
    case "tablet":
      return {};
  }
};

const getLeftStyle = ({ settings: { profile } }) => {
  switch (profile) {
    case "desktop":
      return {};
    case "phone":
      return {};
    case "tablet":
      return {};
  }
};

const portfolioState = State();
const resumeState = State();

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

const wrapperClassList = (mdl) =>
  ["desktop", "laptop"].includes(mdl.settings.profile)
    ? ".w3-cell-row.w3-block.w3-center.w3-margin.w3-padding"
    : ".w3-cell-row.w3-block.w3-center.w3-padding";

const rowWrapper = {
  view: ({ children, attrs: { mdl } }) => m(wrapperClassList(mdl), children),
};

const getClassList = (mdl) => {
  switch (mdl.settings.profile) {
    case "phone":
      return "column.items-center.justify-evenly";
    case "tablet":
      return "row.items-center";
    case "desktop":
      return "column.items-center.justify-evenly";
  }
};

export const Home = {
  view: ({ attrs: { mdl } }) =>
    m(
      `#home.${getClassList(mdl)}.portfolio-home`,
      m(
        "section.hero-visual",
        { style: getLeftStyle(mdl) },
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
        { style: getRightStyle(mdl) },
        m("p.kicker", "Frontend architecture · design systems · product UI"),
        m("h2", "I turn complex product workflows into clear, durable interfaces."),
        m(
          "p.hero-lede",
          `Senior frontend engineer with 8+ years building React, Vue, Mithril, NativeScript, and API-driven product surfaces for teams that need speed without losing craft.`,
        ),
        m(
          "p.hero-support",
          `I specialize in legacy modernization, reusable component systems, performance-minded UI, and pragmatic collaboration across design, product, and backend teams.`,
        ),
        m(".cred-grid", [
          m(".cred-card", [m("strong", "8+ yrs"), m("span", "Production frontend delivery")]),
          m(".cred-card", [m("strong", "Modernized"), m("span", "Legacy .NET workflows into modern UI")]),
          m(".cred-card", [m("strong", "Systems"), m("span", "Reusable components, APIs, performance")]),
        ]),
        m(".primary-actions", [
          m(SheetBtn, {
            title: "View Resume",
            label: "Open resume",
            variant: "primary",
            action: () => (resumeState.hideSheet = false),
          }),
          m(SheetBtn, {
            title: "See Work",
            label: "Open portfolio",
            action: () => (portfolioState.hideSheet = false),
          }),
        ]),

        m(BottomSheet, {
          state: resumeState,
          render: (state) => m(Resume, { mdl, state }),
        }),
        m(BottomSheet, {
          state: portfolioState,
          render: () => m(Portfolio, { mdl }),
        }),
      ),
    ),
};

import m from "mithril";
import { Links } from "@/components/links";
import { Mask } from "@/components/mask";
import { Resume } from "@/components/resume";
import { Portfolio } from "@/components/portfolio";
import { BottomSheet, State } from "@/components/bottom-sheet";
import { Animate, fadeIn } from "@/styles";

const getRightStyle = ({ settings: { profile } }) => {
  switch (profile) {
    case "desktop":
      return { width: "100%" };
    case "phone":
      return { height: "200%", width: "100%" };
    case "tablet":
      return { height: "100%", justifyContent: "center", width: "49.99999%" };
  }
};

const getLeftStyle = ({ settings: { profile } }) => {
  switch (profile) {
    case "desktop":
      return { width: "100%" };
    case "phone":
      return { height: "200%", width: "100%" };
    case "tablet":
      return { height: "100%", justifyContent: "center", width: "49.99999%" };
  }
};

const portfolioState = State();
const resumeState = State();

const SheetBtn = {
  view: ({ attrs: { action, title } }) =>
    m(
      "button.w3-white",
      {
        onclick: action,
        type: "button",
        id: "open-sheet",
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
      `#home.${getClassList(mdl)}.w3-container`,
      { style: { height: "90dvh" } },
      m(
        "section.w3-padding.column.justify-evenly.overflow",
        { style: getLeftStyle(mdl) },

        m("img#me.w3-block.w3-content.show", {
          src: "images/me.webp",
        }),
        m(Mask),
        m(
          rowWrapper,
          { mdl },
          m(
            "a.w3-cell",
            {
              href: "tel:+3474203251",
            },
            m(SheetBtn, {
              title: m("img", {
                style: { width: "25px" },
                src: "https://cdn-icons-png.flaticon.com/512/15/15874.png",
              }),
            }),
          ),
          m(
            "a.w3 - cell",
            {
              href: "mailto:boazblake@protonMail.com",
            },
            m(SheetBtn, {
              title: m("img", {
                style: { width: "25px" },
                src: "https://cdn-icons-png.flaticon.com/512/542/542638.png",
              }),
            }),
          ),
        ),
      ),
      m(
        "section.column.justify-evenly.w3-padding.overflow",
        { style: getRightStyle(mdl) },
        m(
          "p.w3-center",
          `Results-driven Senior Software Engineer with over 8 years of experience in frontend development, specializing in ReactJS and modern JavaScript frameworks. Proven expertise in architecting scalable web applications, optimizing UI performance, and leading design system implementations.`,
        ),
        m(
          "p.w3-center",
          `Adept at collaborating with cross-functional teams, mentoring junior developers, and integrating RESTful APIs and GraphQL. Passionate about delivering high-fidelity, user-centric solutions with a focus on innovation and excellence.`,
        ),
        m(
          rowWrapper,
          { mdl },
          m(
            ".w3-cell",
            m(SheetBtn, {
              title: "Resume",
              action: () => (resumeState.hideSheet = false),
            }),
          ),
          m(
            ".w3-cell",
            m(SheetBtn, {
              title: "Portfolio",
              action: () => (portfolioState.hideSheet = false),
            }),
          ),
        ),
        m(rowWrapper, { mdl }, m(Links, { mdl })),

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

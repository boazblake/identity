import m from "mithril";

const toggleTheme = (mdl) => {
  mdl.settings.theme =
    mdl.settings.theme === "executive" ? "creative" : "executive";
  document.documentElement.dataset.theme = mdl.settings.theme;
  localStorage.setItem("theme", mdl.settings.theme);
};

export const Header = {
  view: ({ attrs: { mdl } }) =>
    m(
      "header.site-header",
      m(
        ".brand",
        m(
          "p.eyebrow",
          mdl.settings.theme === "creative"
            ? "Dark Editorial Mode"
            : "Senior Frontend Engineer",
        ),
        m(
          "h1.typewriter.type-writer",
          {
            oncreate: ({ dom }) =>
              (dom.onanimationend = () =>
                setTimeout(() => dom.classList.remove("type-writer"))),
          },
          m("code", "{ Boaz Blake }"),
        ),
      ),
      m(
        "button.theme-toggle",
        {
          type: "button",
          onclick: () => toggleTheme(mdl),
          "aria-label": `Switch to ${
            mdl.settings.theme === "executive" ? "creative" : "executive"
          } theme`,
        },
        mdl.settings.theme === "executive" ? "Dark" : "Light",
      ),
    ),
};

import m from "mithril";

const links = [
  {
    href: "https://github.com/boazblake",
    src: "images/github.svg",
    label: "GitHub profile",
    target: "_blank",
  },
  {
    href: "https://www.linkedin.com/in/boazblake/",
    src: "images/linkedin.svg",
    label: "LinkedIn profile",
    target: "_blank",
  },
];

const Link = () => {
  let state = {
    hover: false,
  };
  return {
    view: ({ attrs: { href, src, label, target } }) =>
      m(
        target ? "a" : m.route.Link,
        {
          class: "social-link",
          target: target ? "_blank" : "",
          rel: target ? "noopener noreferrer" : "",
          "aria-label": label,
          href,
        },
        m("img", {
          src,
          alt: "",
          style: {
            transform: state.hover ? "skewY(10deg)" : "",
          },
        }),
      ),
  };
};

export const Links = {
  view: () =>
    links.map(({ href, src, label, target }) =>
      m(Link, { href, src, label, target }),
    ),
};

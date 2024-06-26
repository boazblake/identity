import m from 'mithril'
import { Animate, popIn } from "@/styles"
import { randomPause } from "@/Utils"

const links = [
  {
    href: "https://github.com/boazblake",
    src: "images/github.svg",
    target: "_blank",
  },
  {
    href: "https://www.linkedin.com/in/boazblake/",
    src: "images/linkedin.svg",
    target: "_blank",
  },
]



const Link = () => {
  let state = {
    hover: false,
  }
  return {
    view: ({ attrs: { href, src, target } }) =>
      m(
        target ? "a" : m.route.Link,
        {
          class: 'w3-cell',
          oncreate: Animate(popIn, randomPause),
          target: target ? "_blank" : "",
          href,
        },
        m('button.w3-white', m("img", {
          style: {
            margin: "2px",
            height: "50px",
            width: "50px",
            transition: "transform .1s ease-in",
            ...(state.hover && { transform: "skewY(10deg)" }),
          },
          src,
        }))
      ),
  }
}

export const Links = {
  view: () => links.map(({ href, src, target }) => m(Link, { href, src, target })),
}

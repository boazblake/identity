import m from "mithril";
import { Header } from "@/components";

export const Layout = () => {
  return {
    view: ({ children, attrs: { mdl } }) =>
      m("#app", [
        // m.fragment(m(".wipe-screen wipe-1"), m(".wipe-screen wipe-2")),
        m(Header, { mdl }),
        children,
      ]),
  };
};

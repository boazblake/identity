import m from 'mithril'
import { Header } from "@/components"


export const Layout = () => {
  return {
    view: ({ children, attrs: { mdl } }) =>
      m('.entryDiv', m("#app",
        m(Header, { mdl }),
        children,
      )),
  }
}

import m from "mithril";
import "../styles/bottom-sheet.css";

const isFullScreen = (state) => {
  const threshold = window.innerWidth < 668 ? 75 : 90;
  return state.sheetHeight >= threshold;
};
const touchPosition = (event) => event.touches ? event.touches[0] : event;
const resetHeight = () => Math.min(50, 720 / window.innerHeight * 100);
const close = (state) => {
  state.activePanel = null;
  state.sheetHeight = resetHeight();
};
const onDragStart = (state, drag) => (event) => {
  event.preventDefault();
  drag.position = touchPosition(event).pageY;
  state.sheetHeight = Math.max(14, Math.min(100, state.sheetHeight));
};
const onDragMove = (state, drag) => (event) => {
  if (drag.position === undefined) return;
  const y = touchPosition(event).pageY;
  state.sheetHeight = Math.max(0, Math.min(100, state.sheetHeight + (drag.position - y) / window.innerHeight * 100));
  drag.position = y;
};
const onDragEnd = (state, drag) => (event) => {
  if (drag.position === undefined) return;
  event.preventDefault();
  drag.position = undefined;
  if (state.sheetHeight < 15) close(state);
};

const State = () => ({ activePanel: null, sheetHeight: resetHeight() });
const drag = { position: undefined };

const BottomSheet = {
  view: ({ attrs: { state, render } }) => {
    const dragging = drag.position !== undefined;
    const fullscreen = isFullScreen(state);
    return m("#bottomsheet.sheet", {
      onmousemove: onDragMove(state, drag),
      ontouchmove: onDragMove(state, drag),
      onmouseup: onDragEnd(state, drag),
      ontouchend: onDragEnd(state, drag),
      onmouseleave: onDragEnd(state, drag),
      "aria-hidden": `${!state.activePanel}`,
      "aria-modal": "true",
      role: "dialog",
      style: { bottom: fullscreen ? 0 : "3dvh" },
    },
      m(".overlay"),
      m(`#contents.${fullscreen ? "is-fullscreen" : "is-windowed"}.${dragging ? "is-dragging" : "is-selectable"}`, {
        style: { height: `${Math.max(14, Math.min(100, state.sheetHeight))}dvh` },
      },
        m(`header.controls.${dragging ? "grabbing" : "grabber"}`, {
          ontouchstart: onDragStart(state, drag),
          onmousedown: onDragStart(state, drag),
        },
          m(".draggable-area", m(".draggable-thumb")),
          m("button.close-sheet", {
            type: "button",
            "aria-label": "Close sheet",
            onclick: () => close(state),
          }, m.trust("&times;")),
        ),
        m("#sheet-contents.body", render(state.activePanel)),
      ),
    );
  },
};

export { BottomSheet, State };

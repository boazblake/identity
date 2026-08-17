import m from "mithril";
import routes from "./routes.js";
import model from "./model.js";
import "./styles/index.css";

const root = document.body;
const getSavedTheme = () => {
  try {
    return localStorage.getItem("theme") || sessionStorage.getItem("theme");
  } catch (_error) {
    return null;
  }
};

const savedTheme = getSavedTheme();

model.settings.theme = savedTheme === "creative" ? "creative" : "executive";
document.documentElement.dataset.theme = model.settings.theme;

m.route(root, "/", routes(model));

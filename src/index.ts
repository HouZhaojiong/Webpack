// import { join } from "lodash";
import "@/component/favicon";
import "./style.css";

async function component() {
  const element = document.createElement("div");
  const {
    default: { join },
  } = await import("lodash");
  element.innerHTML = join(["Hello", "webpack"], " ");
  return element;
}

component().then((component) => {
  document.body.appendChild(component);
});

console.log("run");

import "./index.css";
import { $ } from "./lib/funcs/dom";
import { render } from "preact";
import App from "./App";
import { initializeWindowControls } from "./lib/funcs/window_controls";

document.addEventListener("contextmenu", (e) => e.preventDefault());

initializeWindowControls();
render(<App />, $("#root")!);

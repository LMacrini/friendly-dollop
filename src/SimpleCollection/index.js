// import local components
import Block from "./components/Block";
import Header from "./components/Header";
// Import the express library
import * as expressModule from "@uniwebcms/express"; // See README for more details: https://github.com/uniwebcms/express/blob/main/README.md
// import CSS
import "./index.css";

export default { ...expressModule, Block, Header };

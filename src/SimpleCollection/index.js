// import local components
import Block from "./components/Block";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import ImageBand5 from "./components/5ImageBand";
import ArticleList from "./components/ArticleList";
import Container from "./components/Container";
import Newsletter from "./components/Newsletter";
import Blog from "./components/Blog";
import Resume from "./components/Resume";
// Import the express library
import * as expressModule from "@uniwebcms/express"; // See README for more details: https://github.com/uniwebcms/express/blob/main/README.md
// import CSS
import "./index.css";

export default {
  ...expressModule,
  Block,
  Header,
  Introduction,
  ImageBand5,
  ArticleList,
  Container,
  Newsletter,
  Blog,
  Resume,
  Footer,
};

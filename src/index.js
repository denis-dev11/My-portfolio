import "./styles.css";
import {initMenu} from "./hamburger-menu.js";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { initPageLoader } from './loader.js';
import cvUrl from "./assets/CV.pdf";


initMenu()


initPageLoader({
  loaderId: 'page-loader',
  delayThreshold: 200,        // loader appears only if delay > 200ms
  transitionDuration: 500
});

const link = document.getElementById("cv-link");
link.href = cvUrl;
link.target = "_blank";
import "./styles.css";
import {initMenu} from "./hamburger-menu.js";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { initPageLoader } from './loader.js';
initMenu()


initPageLoader({
  loaderId: 'page-loader',
  delayThreshold: 200,        // loader appears only if delay > 200ms
  transitionDuration: 500
});
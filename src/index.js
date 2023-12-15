import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

document
  .getElementById("openTwoPages")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Open the first page in a new tab
    window.open("https://github.com/nagonad/StockTrackerFrontend", "_blank");

    // Open the second page in another new tab
    window.open("https://github.com/AmroAlmak/StockTrackrBackend", "_blank");
  });
initScrollReveal(targetElements, defaultProps);
initTiltEffect();

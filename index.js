// Initialization for ES Users


  
  tailwind.config = {
    darkMode: "class",
    theme: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        body: ["Roboto", "sans-serif"],
        mono: ["ui-monospace", "monospace"],
      },
    },
    corePlugins: {
      preflight: false,
    },
  };

   src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/tw-elements.umd.min.js"
// Initialization for ES Users
  import {
    Carousel,
    initTE,
  } from "tw-elements";
  
  initTE({ Carousel });

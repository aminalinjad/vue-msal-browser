import { resolve } from "path";
import {defineConfig} from "vite";


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // src/indext.ts is where we have exported the component(s)
      entry: resolve(__dirname, "./main.js"),
      name: "msal-vue",
      // the name of the output files when the build is run
      fileName: "msal-vue",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["@azure/msal-browser"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        // globals: {
        //   vue: "Vue",
        // },
      },
    },
  },

  });

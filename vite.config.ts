import react from "@vitejs/plugin-react";
// import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// vite.config.js
const ReactCompilerConfig = {
  /* ... */
};

export default defineConfig(() => {
  return {
    plugins: [
      react({
        babel: {
          // plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
        },
      }),
    ],
    // ...
  };
});

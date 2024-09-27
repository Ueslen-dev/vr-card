import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "card",
      filename: "remoteEntry.js",
      exposes: {
        "./VrCard": "./src/components/Card",
      },
      shared: [
        "react",
        "react-dom",
        "@chakra-ui/react",
        "@emotion/react",
        "@emotion/styled",
      ],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});

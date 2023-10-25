import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Path from "path";
import pages from "vite-plugin-pages";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://leroyg-11.github.io/",
  plugins: [
    react(),
    pages({
      dirs: "src/pages",
      baseroute: "",
    }),
  ],
  resolve: [
    {
      find: "@",
      replacement: Path.resolve(__dirname, "src"),
    },
  ],
});

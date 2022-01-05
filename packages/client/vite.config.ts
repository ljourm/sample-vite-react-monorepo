import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pageList from "./pagelist";

const rootDir = "src/pages";

// https://vitejs.dev/config/
export default defineConfig({
  root: rootDir,
  publicDir: resolve(__dirname, "public"),
  resolve: {
    alias: {
      "~/": resolve(__dirname, "src") + "/",
    },
  },
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: false,
    rollupOptions: {
      input: pageList.map((path) => resolve(__dirname, rootDir, path)),
    },
  },
  plugins: [react()],
});

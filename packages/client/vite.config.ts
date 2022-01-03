import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const rootDir = "src/pages";

const htmlFilePaths = ["index.html", "about/index.html"].map((path) =>
  resolve(__dirname, rootDir, path)
);

// https://vitejs.dev/config/
export default defineConfig({
  root: rootDir,
  resolve: {
    alias: {
      "~/": resolve(__dirname, "src") + "/",
    },
  },
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: false,
    rollupOptions: {
      input: htmlFilePaths,
    },
  },
  plugins: [react()],
});

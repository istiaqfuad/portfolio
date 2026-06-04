import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the build works on any GitHub Pages subpath
  // (https://<user>.github.io/<repo>/). For a user/org root site or a
  // custom domain, set this to "/" instead.
  base: "./",
  plugins: [react(), tailwindcss()],
});

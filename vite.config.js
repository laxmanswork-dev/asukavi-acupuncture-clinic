import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  css: {
    // Prevent Vite from walking up to a stray postcss.config.js
    // (e.g. one in a parent/home directory using the old Tailwind v3
    // PostCSS plugin API), which conflicts with @tailwindcss/vite (v4).
    postcss: {
      plugins: [],
    },
  },

  server: {
    host: true,
    port: 5173,
    open: true,
  },

  preview: {
    host: true,
    port: 4173,
  },

  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
  },
});
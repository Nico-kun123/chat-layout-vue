import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), pluginPurgeCss()],
  optimizeDeps: {
    include: ["vue"],
  },
  base: "./",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // ПЕРЕМЕННЫЕ SCSS 👀
        additionalData: '@import "@/assets/styles/_variables.scss";',
      },
    },
  },
});

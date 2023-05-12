import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  resolve: {
    alias: [
      { find: "Api", replacement: "/src/process/api" },
      { find: "Assets", replacement: "/src/assets" },
      { find: "Components", replacement: "/src/UI/components" },
      { find: "Helpers", replacement: "/src/helpers" },
      { find: "Locales", replacement: "/src/process/locales" },
      { find: "Reducers", replacement: "/src/process/redux/reducers" },
      { find: "Redux", replacement: "/src/process/redux" },
      { find: "Shared", replacement: "/src/shared" },
    ],
  },
  define: {
    global: {},
  },
  plugins: [
    react(),
    VitePWA({
      injectRegister: "auto",
      devOptions: {
        enabled: true,
      },
      includeAssets: ["**/*.{png}"],
      manifest: {
        start_url: "/index.html",
        name: "Active Zone",
        short_name: "Az",
        background_color: "#FFD700",
        theme_color: "#FFD700",
        icons: [
          {
            src: "/public/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/public/pwa-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/public/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/public/pwa-256x256.png",
            sizes: "256x256",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});

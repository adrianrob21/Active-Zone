import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  resolve: {
    alias: [
      { find: "Assets", replacement: "/src/assets" },
      { find: "Components", replacement: "/src/UI/components" },
    ],
  },

  plugins: [
    react(),
    VitePWA({
      injectRegister: "auto",
      includeAssets: [
        "pwa_resources/favicon.ico",
        "pwa_resources/apple-touch-icon.png",
        "pwa_resources/masked-icon.svg",
      ],
      manifest: {
        theme_color: "#FFD700",
        icons: [
          {
            src: "pwa_resources/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa_resources/pwa-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "pwa_resources/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa_resources/pwa-256x256.png",
            sizes: "256x256",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});

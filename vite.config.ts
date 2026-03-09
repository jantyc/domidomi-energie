import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Figma Make používá prefix figma:asset/..., namapujeme ho na reálné PNG soubory
      "figma:asset": "/src/assets/src/assets"
    }
  },
  assetsInclude: ["**/*.svg", "**/*.csv"],
  server: {
    port: 5173
  }
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/SiteHydroUAI/',
  server: {
    host: "::",
    port: 8080,
  },
  assetsInclude: ['**/*.heic'],
  plugins: [
    react(), ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

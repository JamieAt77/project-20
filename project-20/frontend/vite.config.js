import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The backend runs on port 4000; every /api request from the browser
// is proxied there in development so the frontend can use plain relative paths.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
      },
    },
  },
});

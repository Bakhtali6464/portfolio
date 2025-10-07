import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const isProduction = mode === 'production';
  
  return {
    // base: isProduction ? '/portfolio/' : '/',
    base: '/portfolio/',
    plugins: [react(), tailwindcss()],
    server: {
      open: true,
      host: true,
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets'
    }
  };
});
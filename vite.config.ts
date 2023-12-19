import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    minify: "terser", // 必须启用：terserOptions配置才会有效
    terserOptions: {
      compress: {
        // 生产环境时移除 console
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

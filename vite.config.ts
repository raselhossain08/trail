import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), chunkSplitPlugin()],
  server: {
    host: true,
    port: 3000,
    watch: {
      ignored: ["**/node_modules/**"],
      usePolling: true,
    },
  },
});

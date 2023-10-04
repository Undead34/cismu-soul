import { nodeResolve } from "@rollup/plugin-node-resolve";
import { defineConfig } from "vite";

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    // Some libs that can run in both Web and Node.js, such as `axios`, we need to tell Vite to build them in Node.js.
    browserField: false,
    mainFields: ["module", "jsnext:main", "jsnext"],

  },
  build: {
    rollupOptions: {
      output: {
        globals: { crypto: 'crypto' },
      },
      external: ['crypto'],
      plugins: [nodeResolve({ preferBuiltins: true })],
    }
  }
});

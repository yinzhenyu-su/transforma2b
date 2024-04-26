import { defineConfig } from "tsup";
export default defineConfig({
  entry: {
    index: "src/index.ts",
  },
  clean: true,
  publicDir: "src",
  outDir: "./dist",
  sourcemap: true,
  dts: false,
  format: ["esm", "cjs"],
});

import { join } from "path";
import { defineConfig } from "vitest/config";


export default defineConfig({
  test: {
    include: ["**/test/**/*.test.ts"],
    exclude: [],
    environment: "node",
    coverage: {
      reportsDirectory: "./coverage/server",
      include: ["**/src/**"],
      exclude: [
        "**/src/cron.ts",
        "**/src/start.ts",
        "**/src/**/*-interface.ts",
      ],
    },
    globals: true,
  },

  resolve: {
    alias: {
      "~/": join(__dirname, "./src/"),
    },
  },
});

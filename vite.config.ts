import mdx from "@mdx-js/rollup";
import { remarkMdxCodeMeta } from "remark-mdx-code-meta";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/JSDayCanarias/",
  plugins: [
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    mdx({
      providerImportSource: "@mdx-js/react",
      remarkPlugins: [remarkMdxCodeMeta],
    }),
  ],
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
});

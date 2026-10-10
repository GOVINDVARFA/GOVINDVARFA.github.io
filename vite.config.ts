import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  const base = env.VITE_BASE_PATH || "/";
  const siteUrl = env.VITE_SITE_URL?.replace(/\/?$/, "/");

  return {
    base,
    plugins: [
      react(),
      {
        name: "portfolio-social-metadata",
        transformIndexHtml() {
          return [
            {
              tag: "meta",
              attrs: {
                property: "og:image",
                content: `${siteUrl || base}social-preview.png`,
              },
              injectTo: "head" as const,
            },
            ...(siteUrl
              ? [
                  {
                    tag: "meta",
                    attrs: { property: "og:url", content: siteUrl },
                    injectTo: "head" as const,
                  },
                  {
                    tag: "link",
                    attrs: { rel: "canonical", href: siteUrl },
                    injectTo: "head" as const,
                  },
                ]
              : []),
          ];
        },
      },
    ],
  };
});

import {defineConfig} from "astro/config";
import {SITE} from "./src/config";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import netlify from "@astrojs/netlify/functions";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
	site: SITE.url,
	output: "server",
	adapter: netlify(),
	markdown: {
		rehypePlugins: [
			[
				rehypeExternalLinks, {
					content: {
						type: "text",
						value: " 🔗"
					},
					target: "_blank"
				}
			]
		],
		remarkPlugins: [
			remarkToc, [remarkCollapse, {test: "Table of Contents", summary: "Table of Contents"}]
		],
		shikiConfig: {
			theme: "one-dark-pro",
			wrap: true
		}
	}
});

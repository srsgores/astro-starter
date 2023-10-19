import {defineConfig} from "astro/config";
import {SITE} from "./src/config";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
	site: SITE.url,
	adapter: netlify(),
	markdown: {
		remarkPlugins: [
			remarkToc, [remarkCollapse, {test: "Table of contents", summary: "Table of Contents"}]
		]
	}
});

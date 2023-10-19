import {defineConfig} from "astro/config";
import {SITE} from "./src/config";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
	site: SITE.url,
	adapter: netlify()
});

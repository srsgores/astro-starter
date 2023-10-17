import {defineConfig} from "astro/config";
import {SITE} from "./src/config";
import netlify from "@astrojs/netlify/edge-functions";

// https://astro.build/config
export default defineConfig({
	site: SITE.url,
	adapter: netlify()
});

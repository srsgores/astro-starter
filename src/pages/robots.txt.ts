import type {APIRoute} from "astro";
import {SITE} from "@config";

const robotsTxt = `
User-agent: Googlebot
Disallow: /nogooglebot/

User-agent: *
Allow: /

Sitemap: ${new URL("sitemap-index.xml", SITE.url).href}`;

export const GET: APIRoute = function () {
	return new Response(robotsTxt.trim(), {
		headers: {"Content-Type": "text/plain"}
	});
}

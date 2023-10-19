import rss from "@astrojs/rss";
import {getCollection} from "astro:content";
import getSortedPosts from "@utils/get-sorted-posts";
import {SITE} from "@config";

export async function GET (context: {site: string;}) {
	const posts = await getCollection("blog");
	const sortedPosts = getSortedPosts(posts);
	return rss({
		title: SITE.title,
		description: SITE.description,
		site: context.site,
		items: sortedPosts.map(function(post) {
			return {
				link: `posts/${post.slug}`,
				title: post.data.title,
				description: post.data.description,
				pubDate: new Date(post.data.datePublished)
			};
		})
	});
}

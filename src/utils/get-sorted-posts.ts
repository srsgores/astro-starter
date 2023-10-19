import type {CollectionEntry} from "astro:content";

export const getPublishedPosts = function(posts: CollectionEntry<"blog">[]): CollectionEntry<"blog">[] {
	return posts.filter(function(post) {
		return post.data.status === "Published";
	});
};

const sortPostsByMostRecent = function(post: CollectionEntry<"blog">, nextPost: CollectionEntry<"blog">) {
	const postPublishedDate = Math.floor(new Date(post.data.datePublished).getTime() / 1000);
	const nextPostPublishedDate = Math.floor(new Date(nextPost.data.datePublished).getTime() / 1000);
	return nextPostPublishedDate - postPublishedDate;
};

function getSortedPosts (posts: CollectionEntry<"blog">[]): CollectionEntry<"blog">[] {
	return getPublishedPosts(posts).sort(sortPostsByMostRecent);
}

export default getSortedPosts;
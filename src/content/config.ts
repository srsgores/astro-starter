import {SITE} from "@config";
import {defineCollection, z} from "astro:content";

const UNCATEGORIZED_TAG = "uncategorized";
const OG_IMAGE_CONSTRAINTS = {
	width: 1200,
	height: 630
};

export enum Status {
	Published,
	Draft
}

const blogPostSchema = {
	title: z.string(),
	description: z.string(),
	author: z.string().default(SITE.author),
	datePublished: z.date().optional(),
	status: z.nativeEnum(Status),
	tags: z.array(z.string()).default([UNCATEGORIZED_TAG]),
	canonicalURL: z.string().url().optional()
};

const validateOGImage = function(image: {width: number; height: number}) {
	return image.width >= OG_IMAGE_CONSTRAINTS.width && image.height >= OG_IMAGE_CONSTRAINTS.height;
};

const INVALID_OG_IMAGE_DIMENSIONS_MESSAGE = `OpenGraph image must be at least ${OG_IMAGE_CONSTRAINTS.width} X ${OG_IMAGE_CONSTRAINTS.height} pixels!`;
const blog = defineCollection({
	type: "content",
	schema: function({image}) {
		return z.object({
			...blogPostSchema,
			ogImage: image().refine(validateOGImage, {message: INVALID_OG_IMAGE_DIMENSIONS_MESSAGE}).or(z.string()).optional()
		});
	}
});

export const collections = {blog};

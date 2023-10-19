import {SITE} from "@config";
import {defineCollection, type ImageFunction, z} from "astro:content";

const UNCATEGORIZED_TAG = "uncategorized";
const OG_IMAGE_CONSTRAINTS = {
	width: 1200,
	height: 630
};

export enum Status {
	Published = "Published",
	Draft = "Draft"
}

const blogPostSchema = {
	title: z.string(),
	description: z.string(),
	author: z.string().default(SITE.author),
	datePublished: z.date().optional(),
	dateModified: z.date().default(new Date()),
	status: z.nativeEnum(Status),
	tags: z.array(z.string()).default([UNCATEGORIZED_TAG]),
	canonicalURL: z.string().url().optional()
};

const validateImage = function(image: {width: number; height: number}) {
	return image.width >= OG_IMAGE_CONSTRAINTS.width && image.height >= OG_IMAGE_CONSTRAINTS.height;
};

const validatedImage = function(image: ImageFunction, constraints: {minimumHeight: number; minimumWidth: number} = {minimumWidth: 600, minimumHeight: 1000}) {
	const incorrectSizeErrorMessage = `image must be at least ${constraints.minimumWidth} X ${constraints.minimumHeight} pixels!`;
	return image().refine(validateImage, {message: incorrectSizeErrorMessage}).or(z.string());
};

const blog = defineCollection({
	type: "content",
	schema: function({image: imageFunction}) {
		return z.object({
			...blogPostSchema,
			image: validatedImage(imageFunction).optional(),
			ogImage: validatedImage(imageFunction, {minimumWidth: OG_IMAGE_CONSTRAINTS.width, minimumHeight: OG_IMAGE_CONSTRAINTS.height}).optional()
		});
	}
});

export const collections = {blog};

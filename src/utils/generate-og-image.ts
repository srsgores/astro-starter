export enum OGImageTemplate {
	Site = "site",
	Learn = "learn",
	Docs = "docs",
	Blog = "blog",
}

enum OgImageFileExtension {
	JPEG,
	PNG
}

interface OgImageOptions {
	extension?: OgImageFileExtension;
	template?: OGImageTemplate;
	breadcrumbsText?: string;
	titleText: string;
	fontSize?: string;
	image?: string;
	width?: number;
	height?: number;
}

export function generateOGImage(options: OgImageOptions): string
{
	const {
		extension = "PNG",
		template = "site",
		breadcrumbsText = "",
		titleText,
		fontSize = "50px",
		image,
		width,
		height
	} = options;

	const queryParams: string[] = [];
	for (const option in options)
	{
		const optionValue = options[option as keyof OgImageOptions];
		if (optionValue && option !== "template" && option !== "extension")
		{
			queryParams.push(`${option}=${optionValue}`);
		}
	}
	const ogImageURL = `https://og-image.checklyhq.com/${template}.png?${queryParams.join("&")}`;

	return ogImageURL;
}
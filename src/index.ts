export default {
	async fetch(request): Promise<Response> {
		const destinationURL = "https://zola.com/weddings/matthewandangelina2026";
		const statusCode = 301;
		return Response.redirect(destinationURL, statusCode);
	},
} satisfies ExportedHandler;

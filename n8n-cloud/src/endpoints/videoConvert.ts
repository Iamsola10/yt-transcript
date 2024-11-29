import { Bool, OpenAPIRoute, Uuid } from "chanfana";
import { z } from "zod";
import { YouTubeURL, Data } from "../types";
import { ytmp3 } from "ruhend-scraper";

export class videoConvert extends OpenAPIRoute {
    schema = {
        tags: ["Convert"],
        summary: "Convert a youtube video to mp3",
        request: {
            body: {
                content: {
                    "application/json": {
                        schema: YouTubeURL,
                    },
                },
            },
        },
        responses: {
            "200": {
                description: "Returns the converted video",
                content: {
                    "application/json": {
                        schema: z.object({
                            series: z.object({
                                success: Bool(),
                                result: z.object({
                                    data: Data,
                                }),
                            }),
                        }),
                    },
                },
            },
        },
    };

    async handle(c) {
        // Get validated data
        const validatedData = await this.getValidatedData<typeof this.schema>();

        // Retrieve the validated request body
        const videoToConvert = validatedData.body;

        // Implement your own object insertion here
        if (!videoToConvert.url) {
            return c.json({ error: 'URL is required' }, 400);
        }

        try {
            const data = await ytmp3(videoToConvert.url);
            // return the new converted video object
            return c.json({
                success: true,
                data: data
            });
        } catch (error) {
            console.error("Error downloading or converting video:", error);
            return c.json({ error: 'Failed to convert video' }, 500);
        }
    }
}
import { DateTime, Str } from "chanfana";
import { z } from "zod";

export const Task = z.object({
	name: Str({ example: "lorem" }),
	slug: Str(),
	description: Str({ required: false }),
	completed: z.boolean().default(false),
	due_date: DateTime(),
});

export const YouTubeURL = z.object({
	url: Str({ example: "https://www.youtube.com/watch?v=6n3pFFPSlW4" }),
});

export const Data = z.object({
    title: Str(),
    audio: Str(),
    author: Str(),
    description: Str(),
    duration: Str(),
    views: Str(),
    upload: Str(),
    thumbnail: Str(),
});
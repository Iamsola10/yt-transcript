declare module 'ruhend-scraper' {
    export function ytmp3(url: string): Promise<{
        title: string;
        audio: Buffer;
        author: string;
        description: string;
        duration: string;
        views: string;
        upload: string;
        thumbnail: string;
    }>;
}
import { Hono } from 'hono';
import { ytmp3 } from "ruhend-scraper";
import { R2Bucket } from '@cloudflare/workers-types';


const app = new Hono();

declare global {
    const BUCKET: R2Bucket
}

app.get('/', (c) => c.text('Hello, Hono!'));

app.post('/download', async (c) => {
  const url = c.req.query('url');
  if (!url) {
    return c.json({ error: 'URL is required' }, 400);
  }

  try {
    const data = await ytmp3(url);
    console.log(data);

    // Save audio to Cloudflare R2
    const objectKey = `${data.title}.mp3`;
    await BUCKET.put(objectKey, data.audio);
    console.log(`Audio saved to R2 with key: ${objectKey}`);

    return c.json({ message: 'Audio downloaded successfully', data });
  } catch (error) {
    console.error("Error downloading or saving audio:", error);
    return c.json({ error: 'Failed to download audio' }, 500);
  }
});

export default app;
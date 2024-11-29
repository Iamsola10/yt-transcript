import { ytmp3 } from "ruhend-scraper";
import { fileURLToPath } from 'url';
import fs from "fs";
import path from "path";

async function downloadAndSaveAudio(url: string, __dirname: string) {
  try {
    const data = await ytmp3(url);
    console.log(data);

    const audioPath = path.join(__dirname, "Downloads", `${data.title}.mp3`);
    fs.writeFileSync(audioPath, data.audio);
    console.log(`Audio saved to ${audioPath}`);
  } catch (error) {
    console.error("Error downloading or saving audio:", error);
  }
}

async function main() {
  const URL = "https://www.youtube.com/watch?v=6n3pFFPSlW4";
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  
  await downloadAndSaveAudio(URL, __dirname);
}

main().catch((error) => {
  console.error("Unexpected error:", error);
});


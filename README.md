# YouTube Audio Downloader

This project allows you to download audio from YouTube videos and save it to your local machine. It uses the `ruhend-scraper` library to fetch the audio and metadata. 

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Iamsola10/yt-transcript.git
cd yt-transcript
```

2. Install the dependencies

```bash
npm install
```
## Usage

1. Update the `URL` variable in `main.js` with the YouTube video `URL` you want to download.

2. Run the script:

The audio file will be saved in the `Downloads` directory within the project folder.

## Project Structure

- `main.js`: The main script that downloads and saves the audio.
- `package.json`: Project metadata and dependencies.
- `node_modules/`: Directory containing installed npm packages.

## Error Handling

The script includes basic error handling to catch and log errors during the download and save process. If an error occurs, it will be logged to the console.

## Deploy to Cloudflare Workers

1. Build the project:

```bash
npm run build
```
2. Deploy to Cloudflare Workers:

```bash
npm run publish
```

#### Cloudflare + Hono Summary

- Set up `Hono` and create a basic server.
- Integrate Cloudflare Workers and configure `wrangler.toml`.
- Use Cloudflare R2 to save audio files.
- Deploy the application to Cloudflare Workers.

Make sure to replace `"your-account-id"` in `wrangler.toml` with your actual `Cloudflare account ID`. You can find it in your Cloudflare dashboard.
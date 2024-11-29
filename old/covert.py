import yt_dlp

YOUTUBE_URL = 'https://www.youtube.com/watch?v=wtolixa9XTg'

ydl_opts = {
    'format': 'bestaudio/best',
    'extractaudio': True,
    'audioformat': 'mp3',
    'outtmpl': 'downloads/%(title)s.%(ext)s',
    'cookiefile': 'cookies.txt',  # Add the path to your cookies file
}


with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    ydl.download([YOUTUBE_URL])

print("Download complete!")
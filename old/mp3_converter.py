from pytube import YouTube

# API_ENDPOINT  = "https://www.googleapis.com/youtube/v3/videos"
# BASE_API_ENDPOINT  = "https://api.vevioz.com/apis/single"
# FILE_TYPE = 'mp3'
# URL = f"{BASE_API_ENDPOINT}/{FILE_TYPE}?url={YOUTUBE_URL}"
# response = requests.get(URL)
# print(response.content)

YOUTUBE_URL = 'https://www.youtube.com/watch?v=wtolixa9XTg'

yt = YouTube(YOUTUBE_URL)
print(f"Downloading {yt.title}...")

stream = yt.streams.filter(only_audio=True).first()

print(stream)


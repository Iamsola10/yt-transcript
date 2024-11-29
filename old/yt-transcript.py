from youtube_transcript_api import YouTubeTranscriptApi

url = 'https://www.youtube.com/watch?v=9bZkp7q19f0'
# URL = 'https://www.youtube.com/watch?v=wtolixa9XTg'

video_id = url.split('v=')[1]

transcript = YouTubeTranscriptApi.get_transcript(video_id)

print(transcript)
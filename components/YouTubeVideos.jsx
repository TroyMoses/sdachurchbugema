import React, { useEffect, useState } from "react";

const YouTubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const CHANNEL_ID = "UCoTQ-9-dDGk_OriZMLdnDbA";

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6`
        );
        const data = await res.json();

        // Filter out invalid results (e.g., playlists or channels)
        const validVideos = data.items?.filter(
          (item) => item.id?.videoId && item.snippet
        );

        setVideos(validVideos || []);
      } catch (error) {
        console.error("Failed to fetch YouTube videos:", error);
        setVideos([]); // fallback
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-2">
      {videos.map((video) => (
        <div key={video.id.videoId} className="video-card">
          <iframe
            width="100%"
            height="251"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p>{video.snippet.title}</p>
        </div>
      ))}
    </div>
  );
};

export default YouTubeVideos;

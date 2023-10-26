import React, { useEffect, useState } from "react";

const API_KEY = "AIzaSyDUA9nYT72pE031b_2XKTa1aLZdmwdwt6U"; // Replace with your actual API key
const channelId = "UCV_CsAy5CNBX_uwDQ7RMe1Q"; // Replace with your actual channel ID

const fetchUrl = `https://www.googleapis.com/youtube/v3/playlists?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`;

const YTplaylist = () => {
  const [allVideos, setAllVideos] = useState([]);

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((resJson) => {
        const result = resJson.items.map((doc) => ({
          ...doc,
        }));
        setAllVideos(result);
      });
  }, []);
  console.log(allVideos);
  return (
    <div>
      {allVideos.map((item) => {
        return (
          <div>
            <img src={item.snippet.thumbnails.high.url} width="300px" alt="Youtube Clone Mix" />
            <p>{item.snippet.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default YTplaylist;

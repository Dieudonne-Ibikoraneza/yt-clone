import React, { useEffect, useState } from "react";
const API = "AIzaSyDUA9nYT72pE031b_2XKTa1aLZdmwdwt6U"
const channelId = "UCQh6LB206jF3JxpCDD-fp5Q"

var fetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`

const YTvideos = () => {
    const [allVideos, setAllVideos] = useState([]);
    useEffect(()=>{
        fetch(fetchUrl).then((response) => response.json()).then((resJson) =>{
            const result = resJson.items.map(doc => ({
                ...doc, 
                Videolink: "https://www.youtube.com/embed/AG-erEMhumc?si=F9arQ6PNYcz2P_01"+doc.id.videoId
            }));
            setAllVideos(result);
        })
    },[])
    console.log(allVideos);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/AG-erEMhumc?si=F9arQ6PNYcz2P_01"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
};

export default YTvideos;

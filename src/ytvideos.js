import React, { useEffect, useState } from "react";

const API_KEY = "AIzaSyDUA9nYT72pE031b_2XKTa1aLZdmwdwt6U"; // Replace with your actual API key
const channelId = "UCV_CsAy5CNBX_uwDQ7RMe1Q"; // Replace with your actual channel ID

var fetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`;

const YTvideos = () => {
  const [allVideos, setAllVideos] = useState([]);

  useEffect(()=>{
    fetch(fetchUrl).then((response)=>response.json()).then((resJson)=>{
        const result = resJson.items.map(doc=>({
            ...doc,
            Videolink: `https://www.youtube.com/embed/${doc.id.videoId}`
        }))
        setAllVideos(result)
    })
  },[])
  console.log(allVideos)
  return (
    <div>
        {allVideos.map((item)=>{
            return (
                <div>
                    <iframe width="560" height="315" src={item.Videolink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p>{item.snippet}</p>
                </div>
            )
        })}
    </div>
  );
};

export default YTvideos;

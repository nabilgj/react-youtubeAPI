import React from "react";

import "./VideoItem.css";

const VideoItem = ({ video, OnVideoSelect }) => {
  return (
    <div onClick={() => OnVideoSelect(video)} className="item video-item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

// go into VideoList
export default VideoItem;

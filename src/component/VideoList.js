import React from "react";

import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  // props.videos

  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        OnVideoSelect={onVideoSelect}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

// go into App
export default VideoList;

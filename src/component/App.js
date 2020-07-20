import React, { Component } from "react";

import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const YOUTUBE_KEY = "AIzaSyDMv_uN15d4hO6vSvkQt06Wb7eks6_aG7M";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.onTermSubmit("cars");
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: YOUTUBE_KEY,
      },
    });

    console.log(response);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    console.log("from the app ", video);

    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmission={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// go into index
export default App;

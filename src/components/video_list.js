import React from 'react';
import VideoListItem from './video_list_item';

/*
    'videos' attribute in <VideoList videos={this.state.videos}/> gets passed in here
    as props.videos. 'props' in general are all the properties in <VideoList />
    Now, 'etag' is a long ass string that each item in the array generated by youtube
    actually carries. You save it as a 'key' so that each li generated by the loop
    will have each etag for each video in the array
*/
const VideoList = (props) => {
    const videoItems = props.videos.map(
        (video)=>{
            return <VideoListItem key={video.etag} video={video} onVideoSelect={props.onVideoSelect} />
        }
    );

    return (
        <ul className="media-list">
        {videoItems}
        </ul>
    );
}

export default VideoList;

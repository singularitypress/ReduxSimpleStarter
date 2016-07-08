import React from 'react';

const VideoDetail = ({video}) => {
    if(!video){
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    // same as... const url = 'https://www.youtube.com/embed/' + videoId;

    return(
        <div className="flex-video widescreen">
            <iframe width="100%" height="400px" src={url} frameBorder="0" allowFullScreen></iframe>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;

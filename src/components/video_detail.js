import React from 'react';

const VideoDetail = ({video}) => {
    if(!video){
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    // same as... const url = 'https://www.youtube.com/embed/' + videoId;

    return(
        <div>
            <div className="videoWrapper">
                <iframe src={url} frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="details">
                <div className="video-title">{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;

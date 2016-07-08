import React from 'react';

/*
    const VideoListItem = (props) => { const video = props.video; ... }; and
    const VideoListItem = ({video}) => { ... }; are the same. Makes a variable containing props.video
*/

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.high.url;
    const videoTitle = video.snippet.title;
    var bgImage = {
        backgroundPosition: 'center',
        backgroundImage: 'url('+imageUrl+')',
        backgroundSize: 'cover'
    };
    return (
        <li onClick={() => onVideoSelect(video)} className="videoWrapper" style={bgImage} href="#mysearch">
        <div className="videoWrapperSub" href="#mysearch">
            <a className="left" href="#">
                <p className="media-heading">{videoTitle}</p>
                <div className="media-body">

                </div>
            </a>
            </div>
        </li>
    );
};

export default VideoListItem;

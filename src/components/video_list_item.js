import React from 'react';

/*
    const VideoListItem = (props) => { const video = props.video; ... }; and
    const VideoListItem = ({video}) => { ... }; are the same. Makes a variable containing props.video
*/

const VideoListItem = ({video}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;
    return (
        <li className="media">
            <a className="left" href="#">
                <img className="media-object" src={imageUrl} alt="..."/>
                <div className="media-body">
                    <h4 className="media-heading">{videoTitle}</h4>
                </div>
            </a>
        </li>
    );
};

export default VideoListItem;

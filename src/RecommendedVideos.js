import React from 'react';
import './RecommendedVideos.css'
import Video from './VideoCard';


function RecommendedVideos() {
    return (
        <div className = "recommendedVideos">
            <h1>Recommended</h1>
            <div className = "recommendedVideos__videos">
                <Video
                   title = "Happy Birthday by Maninder butter"
                   views = "2.3M Views"
                   timestamp = "3 days ago"
                   channelImage = "https://avatars.githubusercontent.com/u/51009293?s=60&v=4"
                   channel = "EverythingMusic"
                   image = "https://i.ytimg.com/vi/4RTte4RA1Sg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOdlLEgQtra4DmRSoMZCCCN8mKmw"
                   />
                <Video/>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
            </div>
        </div>
    );
}

export default RecommendedVideos;

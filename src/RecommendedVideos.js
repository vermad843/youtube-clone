import React from 'react';
import './RecommendedVideos.css'
import Video from './VideoCard';


function RecommendedVideos() {
    return (
        <div className = "recommendedVideos">
            <h1>I am RecommendedVideos</h1>
            <div className = "recommendedVideos__videos">
                <Video/>
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

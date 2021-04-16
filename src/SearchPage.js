import React from 'react';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import './SearchPage.css';
import ChannelRow from './ChannelRow';

function SearchPage() {
    return (
        <div className = "searchPage">
            <div className = "searchPage__filter">
                <TuneOutlinedIcon/>
                <h2>Filter</h2>
            </div>
           <hr/>
           <ChannelRow
              image = "//yt3.ggpht.com/ytc/AAUvwnjC4gv6dAWxk-jb4tlSp1cdfnoe2XmN1yPhK2x74g=s176-c-k-c0x00ffffff-no-rj-mo"
              channel = "EverythingMusic"
              verified
              subs="659k"
              noOfVideos={382}
              description = "Amazing Songs You can find here"
             />
        </div>
    )
}

export default SearchPage;

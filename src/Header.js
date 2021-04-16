import React,{useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon  from '@material-ui/icons/VideoCall';    
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';
import './Header.css';

function Header() {
   const [inputSearch, setInputSearch] = useState('');
    return (
        <div className = "header">
             <div className = "header__left">
                <MenuIcon/>
                <Link to="/">
                   <img
                      className = "header__logo"
                      src = "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                      alt = "" 
                   />
                </Link>
             </div>
             <div className = "header__input">
                <input
                   onChange = {e => setInputSearch(e.target.value)}
w                  value = {inputSearch}
                   placeholder = "Search"
                   type = "text"
               />
               <Link to={`/search/${inputSearch}`}>
                   <SearchIcon className = "header__inputButton"/>       
               </Link>
             </div>
             <div className = "header__icons">
                 <VideoCallIcon className = "header__icon"/>
                 <AppsIcon className = "header__icon"/>
                 <NotificationsIcon className = "header__icon"/>
             <Avatar 
               alt="Sharp" 
               src="https://avatars.githubusercontent.com/u/51009293?s=60&v=4" />
             </div>
        </div>
    );
}

export default Header; 

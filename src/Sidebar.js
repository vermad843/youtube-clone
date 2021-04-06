import React from 'react';
import SidebarRow from './SidebarRow';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className = "sidebar">
             <h1>I am a Sidebar</h1>
             <SidebarRow title = "Home"/>
             <SidebarRow title = "Trending"/>
             <SidebarRow title = "Subscription"/>
             <hr/>
             <SidebarRow title = "Library"/>
             <SidebarRow title = "History"/>
             <SidebarRow title = "Your videos"/>
             <SidebarRow title = "Watch Later"/>
             <SidebarRow title = "Liked videos"/>
             <SidebarRow title = "Show more"/>
             <hr/>
        </div>
    )
}

export default Sidebar

import React from 'react';
import SidebarRow from './SidebarRow';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className = "sidebar">
             <SidebarRow Icon= {HomeIcon} title = "Home"/>
             <SidebarRow Icon = {WhatshotIcon} title = "Trending"/>
             <SidebarRow Icon = {SubscriptionsIcon} title = "Subscription"/>
             <hr/>
             {/* <SidebarRow title = "Library"/>
             <SidebarRow title = "History"/>
             <SidebarRow title = "Your videos"/>
             <SidebarRow title = "Watch Later"/>
             <SidebarRow title = "Liked videos"/>
             <SidebarRow title = "Show more"/>
             <hr/> */}
        </div>
    )
}

export default Sidebar

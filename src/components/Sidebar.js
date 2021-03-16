import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

import './Sidebar.css';
import SidebarOption from './SidebarOption';

function Sidebar() {
    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="/logo.png"
                alt="Logo"
            />
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
            
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            <SidebarOption title="Rock" />
            <SidebarOption title="Jazz" />
            <SidebarOption title="Metal" />
        </div>
    );
}

export default Sidebar;

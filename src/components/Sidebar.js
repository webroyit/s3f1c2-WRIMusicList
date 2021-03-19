import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

import './Sidebar.css';
import { useDataLayerValue } from '../DataLayer';
import SidebarOption from './SidebarOption';

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    console.log(playlists, "d")
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

            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />
            ))}
        </div>
    );
}

export default Sidebar;

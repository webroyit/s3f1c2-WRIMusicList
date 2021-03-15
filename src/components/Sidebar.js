import React from 'react';

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
            <SidebarOption title="Home" />
            <SidebarOption title="Search" />
            <SidebarOption title="Your Library" />
        </div>
    );
}

export default Sidebar;

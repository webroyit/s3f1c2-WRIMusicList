import React from 'react';
import { Avatar } from "@material-ui/core";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <SearchRoundedIcon />
                <input
                    placeholder="Search for Artists, Songs, or Podcasts "
                    type="text"
                />
            </div>

            <div className="header__right">
                <Avatar src="1" alt="RW"  />
                <h4>Roy Web</h4>
            </div>
        </div>
    );
}

export default Header;

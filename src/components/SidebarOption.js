import React from 'react';

import './SidebarOption.css';
import { useDataLayerValue} from '../DataLayer';

function SidebarOption({ id, title, Icon, spotify }) {
    const [{ }, dispatch] = useDataLayerValue();
    
    const handleClick = () => {
        if(spotify){
            spotify.getPlaylist(id).then(response => {
                dispatch({
                  type: 'SET_DISCOVER_WEEKLY',
                  discover_weekly: response
                });
            });
        }
    }
    return (
        <div key={title} className="sidebarOption" onClick={() => handleClick()}>
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? <h4>{title}</h4>:<p>{title}</p>}
        </div>
    );
}

export default SidebarOption;

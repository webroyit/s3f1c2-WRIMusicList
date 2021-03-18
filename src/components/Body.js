import React from 'react';

import './Body.css';
import Header from './Header';

function Body({ spotify }) {
    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                <img src="https://images.unsplash.com/photo-1467723992728-4b36889da56d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" alt="Banner" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>Description...</p>
                </div>
            </div>
        </div>
    );
}

export default Body;

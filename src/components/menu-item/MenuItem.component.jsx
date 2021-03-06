import React from 'react';
import { withRouter } from 'react-router-dom';

import './MenuItem.styles.scss';

const MenuItem = (props) => (
    <div className={`${props.size} menu-item`} onClick={() => props.history.push(`${props.match.url}${props.title}`)}>
        <div 
        className="background-image" 
        style={{backgroundImage: `url(${props.image})`}} 
        />
        <div className="content">
            <h1 className="title">{props.title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);
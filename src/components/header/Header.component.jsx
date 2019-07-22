import React from 'react';
import {Link} from  'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo.svg'

import './Header.styles.scss';

const Header = (props) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/shop" className="option">CONTACT</Link>
        </div>
    </div>
)

export default Header;
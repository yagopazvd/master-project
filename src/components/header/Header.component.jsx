import React from 'react';
import {Link} from  'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import './Header.styles.scss';

const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <i className="logo fas fa-bolt"></i>
            <span className="logo-title">LIGHT'NIN</span>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/shop" className="option">CONTACT</Link>
            {
                currentUser ? 
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link to="/sign-in" className="option">SIGN IN</Link>
            }
        </div>
    </div>
)

export default Header;
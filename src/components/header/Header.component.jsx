import React from 'react';
import CartIcon from '../cart-icon/CartIcon.component';
import CartDropdown  from '../cart-dropdown/CartDropdown.component';


import {Link} from  'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartNotHidden } from '../../redux/cart/cart.selectors'


import './Header.styles.scss';

const Header = ({currentUser, notHidden}) => (
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
            <CartIcon />
        </div>
            {
                notHidden && <CartDropdown/>
            }
    </div>
)

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  notHidden: selectCartNotHidden(state),
  
});

export default connect(mapStateToProps)(Header);
import React from 'react';
import { withRouter } from 'react-router-dom';
//import {Link} from 'react-router-dom';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItems } from '../../redux/cart/cart.selectors';

import CustomButton from '../custom-button/CustomButton.component';
import CartItem from '../cart-item/CartItem.component';

import './CartDropdown.styles.scss';


const CartDropdown = ({cartItems, history, dispatch}) => {
    return ( 
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => <CartItem 
                        key={cartItem.id}
                        item={cartItem}
                         />)
                }
            </div>
            <CustomButton
                onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }}
            >CHECKOUT</CustomButton>
        </div>
     );
}
 

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
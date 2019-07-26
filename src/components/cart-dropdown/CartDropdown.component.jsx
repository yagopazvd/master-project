import React from 'react';

import CustomButton from '../custom-button/CustomButton.component';

import './CartDropdown.styles.scss';


const CartDropdown = () => {
    return ( 
        <div className="cart-dropdown">
            <div className="cart-items">

            </div>
            <CustomButton>CHECKOUT</CustomButton>
        </div>
     );
}
 
export default CartDropdown;
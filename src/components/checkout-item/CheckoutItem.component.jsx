import React from 'react';
//import { connect } from 'react-redux'
//import { selectCartItems } from '../../redux/cart/cart.selectors'

import './CheckoutItem.styles.scss';

const CheckoutItem = ({cartItem :{name, imageUrl, price, quantity}}) => {
    return ( 
      <div className="checkout-item">
           <div className="image-container">
                <img alt="item" src={imageUrl} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <span className="remove-button">✘</span>
      </div>
        );
}

 
export default CheckoutItem;
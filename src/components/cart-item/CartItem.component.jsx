import React from 'react';

import './CartItem.styles.scss';

const CartItem = ({item: {imageUrl, price, name, quantity}}) => {
    return ( 
        <div className="cart-item">
            <img alt={name} src={imageUrl}></img>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">
                    {quantity} x {price}
                </span>
            </div>
        </div>
     );
}
 
export default CartItem;
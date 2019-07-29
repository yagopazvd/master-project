import React from 'react';
//import { connect } from 'react-redux'
//import { selectCartItems } from '../../redux/cart/cart.selectors'
import { connect } from 'react-redux';
import { clearItem, addItem, removeItem } from '../../redux/cart/cart.actions'
import './CheckoutItem.styles.scss';

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return ( 
      <div className="checkout-item">
           <div className="image-container">
                <img alt="item" src={imageUrl} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
              <div className="arrow" onClick={() => removeItem(cartItem)}>❮</div>
              <span className="value">{quantity}</span>
              <div className="arrow" onClick={() => addItem(cartItem)}>❯</div>
            </span>
            <span className="price">{price}</span>
            <span onClick={() => clearItem(cartItem)} className="remove-button">✘</span>
      </div>
        );
}

const mapDispatchToProps = dispatch => ({
  clearItem: cartItem => dispatch(clearItem(cartItem)),
  addItem: cartItem => dispatch(addItem(cartItem)),
  removeItem: cartItem => dispatch(removeItem(cartItem))
})
 


export default connect(null, mapDispatchToProps)(CheckoutItem);
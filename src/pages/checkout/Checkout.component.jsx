import React from 'react';
import {connect} from 'react-redux';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/CheckoutItem.component'
import './Checkout.styles.scss';



const Checkout = ({cartItems, cartTotal}) => {
    return ( 
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div> 
            </div>
                {
                    cartItems.map(
                        cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    )
                }
            <span className='total'>TOTAL: ${cartTotal}</span>
        </div>
     );
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  cartTotal: selectCartTotal(state)
});

export default connect(mapStateToProps)(Checkout);
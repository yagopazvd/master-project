import {userActionTypes} from './cart.types'
import { addItemToCart, removeItemFromCart } from './cart.utils'

const INITIAL_STATE = {
    notHidden: false,
    cartItems: []
}


const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case userActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                notHidden: !state.notHidden
            };
        
        case userActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };

        case userActionTypes.CLEAR_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id )
            }

        case  userActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }


        default:
            return state;
    }
}

export default userReducer;
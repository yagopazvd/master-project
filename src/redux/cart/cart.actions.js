import {userActionTypes} from './cart.types'


export const toggleCartHidden = () => ({
    type: userActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
    type: userActionTypes.ADD_ITEM,
    payload: item
});

export const clearItem = item => ({
    type: userActionTypes.CLEAR_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: userActionTypes.REMOVE_ITEM,
    payload: item
})
import {userActionTypes} from './cart.types'


export const toggleCartHidden = () => ({
    type: userActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = item => ({
    type: userActionTypes.ADD_ITEM,
    payload: item
})
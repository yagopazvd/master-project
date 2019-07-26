import {userActionTypes} from './cart.types'


const INITIAL_STATE = {
    isHidden: true
}


const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case userActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                isHidden: !state.isHidden
            }


        default:
            return state;
    }
}

export default userReducer;
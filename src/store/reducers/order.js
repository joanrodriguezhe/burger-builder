import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders: [],
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHSE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            }
            return {
                ...state,
                loadin: false,
                orders: state.orders.concat(newOrder)
            };
        case actionTypes.PURCHSE_BURGER_FAIL:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }

};

export default reducer;
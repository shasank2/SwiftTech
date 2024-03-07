import {
    DELETE_USER,
    LOADING_USER,
    GET_USER_SUCCESS,
    GET_USER_FAILURE
} from "../actions/userActions";

const initialState = {
    loading: false,
    users: [],
    error: null,
    total: 0
};

const userReducer = function (state = initialState, action) {
    switch (action.type) {
        case LOADING_USER:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload.data,
                total: action.payload.headers["x-total-count"]
            };
        case GET_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case DELETE_USER: {
            return {
                ...state,
                cartList: [...action.payload]
            };
        }
        default: {
            return state;
        }
    }
};

export default userReducer;
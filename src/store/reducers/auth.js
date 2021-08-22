import {LOGIN, REGISTER, BAD_REQUEST_400, LOGOUT, EMAIL_CHANGED} from '../actions/auth';
import {useHistory  } from 'react-router-dom';

const initialState = {
    isLoggedIn: false,
    accessToken: null,
    user: {
        email: '',
    },
    userCreated: {
        msg: '',
        created: false
    },
    error: 1,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                accessToken: action.payload
            };

        case REGISTER:
            return {
                ...state,
                userCreated: {
                    msg: action.payload,
                    created: true
                },
                error: null
                // accessToken: action.accessToken
            };
        
        case EMAIL_CHANGED:
            return {
                ...state,
                user: {
                    ...state.user,
                    email: action.payload
                }
            };
        
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                accessToken: null,
            };

        case BAD_REQUEST_400:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
};

export default authReducer;

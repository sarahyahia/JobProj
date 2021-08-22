import {combineReducers} from 'redux';
import authReducer from './auth';

const reducer = combineReducers({
    authUser: authReducer,
});


export default reducer;

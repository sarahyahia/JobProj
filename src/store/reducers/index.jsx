import {combineReducers} from 'redux';
import authReducer from './auth';
import empReducer from './emp';
import jobReducer from './job'

const reducer = combineReducers({
    authUser : authReducer,
    job : jobReducer,
    emp: empReducer,
});


export default reducer;

import {GetEMPS, GetEMP} from '../actions/emp';

const initialState = {
    emps:[],
    emp: {},
    message:"",
    error:1
    
};

const empReducer = (state = initialState, action) => {
    switch (action.type) {
        case GetEMPS:
            return {
                ...state,
                emps:action.payload,
                error: action.error
            };
        
        case GetEMP:
            return {
                ...state,
                emp:action.payload,
                error: action.error
            };
        default:
            return state;
    }
};
     
export default empReducer;
     
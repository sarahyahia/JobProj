import {GetEMPS, GetEMP, AddEMP, SearchEMP, GetPLS} from '../actions/emp';

const initialState = {
    emps:[],
    emp: {},
    langs:[],
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
        case AddEMP:
            return {
                ...state,
                message:action.payload,
                error: action.error
            };
        
        case SearchEMP:
            return {
                ...state,
                emps:action.payload,
                error: action.error
            };
         
        case GetPLS:
            return {
                ...state,
                langs:action.payload,
                error: action.error
            };
        default:
            return state;
    }
};
     
export default empReducer;
     
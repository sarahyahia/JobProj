import {GetJOBS} from '../actions/job';

const initialState = {
    jobs:[],
    job: {},
    message:"",
    error:1
    
};

const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case GetJOBS:
            return {
                ...state,
                jobs:action.payload,
                error: action.error
            };
        default:
            return state;
    }
};
     
export default jobReducer;
     
     
import {GetJOBS, GetJOB, ApplyJOB, SearchJOB} from '../actions/job';

const initialState = {
    jobs:[],
    job: {},
    applicants:[],
    applicant:{},
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
        case GetJOB:
            return {
                ...state,
                job:action.payload,
                error: action.error
            };
        case SearchJOB:
            return {
                ...state,
                jobs:action.payload,
                error: action.error
            };
        case ApplyJOB:
            return {
                ...state,
                message:action.payload,
                error: action.error
            };
        default:
            return state;
    }
};
     
export default jobReducer;
     
     
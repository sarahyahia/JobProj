import axios from 'axios';

export const GetJOBS = 'GetJOBS';
export const GetJOB = 'GetJOB';

export const getjobs = () => async (dispatch) => {
    await axios.get(`http://127.0.0.1:8000/jobs/`
        ).then(
            (response) => {
                console.log(response);
                dispatch({
                    type: GetJOBS,
                    payload:response.data,
                    error:null
                })
    
            }
        ).catch((error) => {
            console.error(error);
            })
};

export const getjob = (id) => async (dispatch) => {
    await axios.get(`http://127.0.0.1:8000/jobs/${id}`
        ).then(
            (response) => {
                console.log(response);
                dispatch({
                    type: GetJOB,
                    payload:response.data,
                    error:null
                })
    
            }
        ).catch((error) => {
            console.error(error);
            })
};
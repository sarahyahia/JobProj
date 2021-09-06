import axios from 'axios';

export const GetJOBS = 'GetJOBS';
export const GetJOB = 'GetJOB';
export const ApplyJOB = 'ApplyJOB';
export const AddJOB = 'AddJOB';
export const SearchJOB = 'SearchJOB';

const token = localStorage.getItem('token');

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
    await axios.get(`http://127.0.0.1:8000/jobs/${id}`,
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

export const applyjob = (request) => async (dispatch) => {
    console.log(request);
    await axios.post(`http://127.0.0.1:8000/jobs/applicants/add`, request,{
        headers: {
          'Authorization': `Token ${token}` 
        }}
        ).then(
            (response) => {
                console.log(response);
                dispatch({
                    type: ApplyJOB,
                    payload:response.data,
                    error:null
                })
    
            }
        ).catch((error) => {
            console.error(error);
            })
};

export const addjob = (request) => async (dispatch) => {
    console.log(request);
    await axios.post(`http://127.0.0.1:8000/jobs/add`, request,{
        headers: {
            'Authorization': `Token ${token}` 
        }}
    ).then(
        (response) => {
            console.log(response);
            dispatch({
                type: AddJOB,
                payload:response.data,
                error:null
            })

        }
    ).catch((error) => {
        console.error(error);
        })
};

export const searchjob = (id) => async (dispatch) => {
    await axios.get(`http://127.0.0.1:8000/jobs/search?search=${id}`,
    ).then(
        (response) => {
            console.log(response);
            dispatch({
                type: SearchJOB,
                payload:response.data,
                error:null
            })

        }
    ).catch((error) => {
        console.error(error);
    })
};

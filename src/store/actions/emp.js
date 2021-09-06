import axios from 'axios';

export const GetEMPS = 'GetEMPS';
export const GetEMP = 'GetEMP';
export const AddEMP = 'AddEMP';
export const SearchEMP = 'SearchEMP';
export const GetPLS = 'GetPLS';

const token = localStorage.getItem('token');

export const getemps = () => async (dispatch) => {
    await axios.get(`http://127.0.0.1:8000/emps/`
        ).then(
            (response) => {
                
                dispatch({
                    type: GetEMPS,
                    payload:response.data,
                    error:null
                })
    
            }
        ).catch((error) => {
            console.error(error);
            })
};

export const getemp = (profile) => async (dispatch) => {
    console.log(profile)
    await axios.get(`http://127.0.0.1:8000/emps${profile}`
        ).then(
            (response) => {
                console.log(response.data);
                dispatch({
                    type: GetEMP,
                    payload:response.data,
                    error:null
                })
    
            }
        ).catch((error) => {
            console.error(error);
            })
};

export const addemp = (request) => async (dispatch) => {
    console.log(request)
    await axios.post(`http://127.0.0.1:8000/emps/add`, request, {
        headers: {
          'Authorization': `Token ${token}` 
        }}
    ).then(
        (response) => {
            console.log(response.data);
            dispatch({
                type: AddEMP,
                payload:response.data,
                error:null
            })

        }
    ).catch((error) => {
        console.error(error);
        })
};

export const getprogramlangs = () => async (dispatch) => {
    await axios.get(`http://127.0.0.1:8000/emps/pl/`
    ).then(
        (response) => {
            console.log(response);
            dispatch({
                type: GetPLS,
                payload:response.data,
                error:null
            })

        }
    ).catch((error) => {
        console.error(error);
        })
};

export const searchemp = (id) => async (dispatch) => {
    console.log(id);
    await axios.get(`http://127.0.0.1:8000/emps/search?${id}`,
    ).then(
        (response) => {
            console.log(response);
            dispatch({
                type: SearchEMP,
                payload:response.data,
                error:null
            })

        }
    ).catch((error) => {
        console.error(error);
    })
};
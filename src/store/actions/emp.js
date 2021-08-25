import axios from 'axios';

export const GetEMPS = 'GetEMPS';
export const GetEMP = 'GetEMP';

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
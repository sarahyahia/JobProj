import axios from 'axios';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const EMAIL_CHANGED = 'EMAIL_CHANGED';
export const BAD_REQUEST_400 = 'BAD_REQUEST_400';

const token = localStorage.getItem('token');

export const login = (request) => async (dispatch) => {
    console.log(request);
    await axios.post(`http://127.0.0.1:8000/auth/login/`, request)
        .then(
            (response) => {
                localStorage.setItem('token', response.data.token);
                console.log(response.data.token);
                dispatch({
                    type: LOGIN,
                    payload: response.data.token,
                })
            },
        ).catch(error =>  {
            console.log(error)
        });
};

export const register = (request) => async (dispatch) => {
    console.log(request);
    await axios.post(`http://127.0.0.1:8000/auth/signup`, request)
        .then(
            (response) => {
                // localStorage.setItem('token', response.data.key);
                console.log(response.status);
                dispatch({
                    type: REGISTER,
                    payload: response.statusText,
                    error: response.status
                });
            },
            (error) => {
                console.log(error.error);
                dispatch({
                    type: BAD_REQUEST_400,
                    payload: error.response.status
                });
            }
        ).catch(error =>  {
            console.log(error)
        });
};

export const logout = () => async (dispatch) => {
    await axios.get(`http://127.0.0.1:8000/auth/logout/`,  {
        headers: {
          'Authorization': `token ${token}` 
        }}
        ).then(
            (response) => {
                dispatch({
                    type: LOGOUT,
                    payload: response.data.message,
                    error: response.status
                });
            },(error)=>
                {console.log(error.data)}
        )
};

export const changeEmail = (email) => (dispatch) => {
    dispatch({
        type: EMAIL_CHANGED,
        payload: email
    })
};
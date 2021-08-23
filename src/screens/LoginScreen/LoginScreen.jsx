import React, { useState } from 'react'
import "./_loginScreen.scss"

import { connect } from "react-redux";
import { login, resetError } from '../../store/actions/auth';

import {Form, Button, Col, Row} from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const LoginScreen = ({isLoggedIn,login, resetError}) => {

    const [username, setUsername] = useState('');
    const [values, setValues] = useState({
        password: "",
        showPassword: false,
    });

    // resetError(1);

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
      };
    
    const onClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    
    const onChangePassword = (prop) => (e) => {
        const password = e.target.value;
        setValues({ ...values, [prop]: password });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const password = values.password;
        login({username, password});
    }

    return (<>
        {isLoggedIn && localStorage.token ?
            <Redirect to="/" />
            :
        <div className="login">
        <div className="col-9 col-md-7 col-lg-5 col-xl-4 mx-auto login-form">
            <Row className="justify-content-md-center">
                <Col className="Col__box">
                    <Form onSubmit={handleSubmit}>
                        <h2 className="mb-4">Login Now</h2>
                        <Form.Group className="mb-3" controlId="formBasicusername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Enter username" value={username} onChange={onChangeUsername} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type={values.showPassword ? "text" : "password"} 
                                placeholder="Password" 
                                value={values.password} 
                                onChange={onChangePassword("password")}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Show Password"
                                onClick={onClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            />
                        </Form.Group>
                        <Button variant="danger" type="submit">
                            Log In
                        </Button>
                        
                        <div className="mt-3">
                            <span>First Time? </span>
                            <NavLink to="/register" className="text-info">Register now</NavLink>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
        </div>
        }</>
    )
}

const mapStateToProps = (state) => ({
    error: state.authUser.error,
    isLoggedIn: state.authUser.isLoggedIn
});

const mapDispatchToProps = (dispatch) => ({
    login: (request) => {
        dispatch(login(request))
    },
    resetError: (error)=>{
        dispatch(resetError(error))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

import React from 'react'
import "./_loginScreen.scss"

import { connect } from "react-redux";
import { login } from '../../store/actions/auth';

import {Form, Button, Col, Row} from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const LoginScreen = ({isLoggedIn,login}) => {

    const [username, setUsername] = useState('');
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });

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

    return (
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
    )
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.authUser.isLoggedIn
});

const mapDispatchToProps = (dispatch) => ({
    login: (request) => {
        dispatch(login(request))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

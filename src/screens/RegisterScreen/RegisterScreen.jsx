import React, { useState } from 'react';
import './_registerScreen.scss';

import { connect } from "react-redux";
import { register, changeEmail, resetError } from '../../store/actions/auth';

import {Form, Button, Col, Row, Alert} from 'react-bootstrap';

import { NavLink, useHistory} from 'react-router-dom';

const RegisterScreen = ({register, error, resetError, changeEmail}) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [isEmployee, setIsEmployee] = useState(false);
    const [err, setErr] = useState('');
    
    let history = useHistory();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
      };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
        changeEmail(email);
    };
    
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const onChangePassword2 = (e) => {
        const password2 = e.target.value;
        setPassword2(password2);
    };

    const onCheckChange = (e) => { 
        const isEmployee = e.target.checked;
        setIsEmployee(isEmployee);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== password2){
            setErr("The password confirmation does not match.")
        }else{
            setErr('');
            // const is_staff = isEmployee
            register({username, email, password, password2});
        }
    }

    return (
        <div className="register">
        <div className="col-9 col-md-7 col-lg-5 col-xl-4 mx-auto register-form">
            <Row className="justify-content-md-center">
                <Col className="Col__box">
                    <Form onSubmit={handleSubmit}>
                        <h2>Create Your Account</h2>
                        {err ? 
                            <Alert variant="danger">{err}</Alert>
                            :error === null? 
                            <Alert variant="success">The account has been created successfully
                            go to <NavLink to="/login" className="text-dark">Log in</NavLink> page</Alert>
                            :error === 500? 
                            <Alert variant="danger">Server error try again in another time.</Alert>
                            :error === 400? 
                            <Alert variant="danger">This username already exist</Alert>
                            :null
                        }
                        <Form.Group className="mb-3" controlId="formBasicusername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Enter username" value={username} onChange={onChangeUsername} required="required" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicemail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={onChangeEmail} required="required" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={password} onChange={onChangePassword} required="required" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupPassword2">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" name="password2" value={password2} onChange={onChangePassword2} required="required" placeholder="Confirm your password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onChange={onCheckChange} type="checkbox" label="Searching for a job?" />
                        </Form.Group>
                        <Button variant="danger" type="submit">
                            Submit
                        </Button>

                        <div className="mt-3">
                            <span>Already have an account? </span>
                            <NavLink to="/emp/register" className="text-info">Log in</NavLink>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    error: state.authUser.error,
});

const mapDispatchToProps = (dispatch) => ({
    register: (request) => {
        dispatch(register(request))
    },
    changeEmail: (email) => {
        dispatch(changeEmail(email))
    },
    resetError: (error)=>{
        dispatch(resetError(error))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);

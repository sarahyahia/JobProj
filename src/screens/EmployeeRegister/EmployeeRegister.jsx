import React,{useState} from 'react';

import Header from '../../components/header/Header';

import './_employeeRegister.scss';

import {Form, Button, Col, Row, Alert} from 'react-bootstrap';


import CreatableSelect from 'react-select/creatable';

import { connect } from "react-redux";

// import { NavLink } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
const EmployeeRegister = ({userEmail}) => {

    const email= userEmail;
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [nationalID, setNationalID] = useState('');
    const [experience, setExperience] = useState('');
    const [bio, setBio] = useState('');

    
    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    };
    
    const onChangeCity = (e) => {
        const city = e.target.value;
        setCity(city);
    };

    const onChangeNationalID = (e) => {
        const nationalID = e.target.value;
        setNationalID(nationalID);
    };

    const onChangeExperience = (e) => {
        const experience = e.target.value;
        setExperience(experience);
    };

    const onChangeBio = (e) => {
        const bio = e.target.value;
        setBio(bio);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //validation for national ID
        if(!nationalID ){
            setError('Please add your national ID!');
        }else if (nationalID.length !== 14){
            setError('Wrong National ID!');
        }else if (! isNumeric(nationalID)){
            setError('National ID must be a number!');
        }else{
        console.log(experience);
        //here redux action function
        }
    }

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <>
        <Header/>
        <div className="empReg">
           <div className="col-9 col-md-7 col-lg-5 col-xl-4 mx-auto empReg-form">
            <Row className="justify-content-md-center">
                <Col className="Col__box_emp">
                    <Form onSubmit={handleSubmit}>
                        <h2 className="mb-4">Build Your Profile</h2>
                        {error? 
                            <Alert variant="danger">{error}</Alert>
                            :
                            null
                        }
                        <Form.Group className="mb-3" controlId="formBasicname">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter name" value={name} onChange={onChangeName} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicemail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasiccity">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="name" placeholder="Enter your city" value={city} onChange={onChangeCity} />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicnumber">
                            <Form.Label>National ID</Form.Label>
                            <Form.Control  placeholder="Enter your national ID" value={nationalID} onChange={onChangeNationalID} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicnumber">
                            <Form.Label>Programming Languages</Form.Label>
                            <CreatableSelect options={options} isMulti isClearable />
                        </Form.Group>

                        <Form.Label>Experience Level</Form.Label>
                        <select className="form-select mb-3" aria-label="Default select example" onChange={onChangeExperience}>
                            <option className="text-mute">Select your experience level</option>
                            <option value="Junior">Junior</option>
                            <option value="Mid">Mid</option>
                            <option value="Senior">Senior</option>
                        </select>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Tell us more about you</Form.Label>
                            <Form.Control as="textarea" rows={3} value={bio} onChange={onChangeBio} />
                        </Form.Group>

                        <Button variant="danger" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
        </div>
        </>
    )
}


const mapStateToProps = (state) => ({
    userEmail: state.authUser.user.userEmail,
    error: state.authUser.error
});

// const mapDispatchToProps = (dispatch) => ({
//     registerUser: (request) => {
//         dispatch(registerUser(request))
//     }
// });

// export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);

export default connect(mapStateToProps, null)(EmployeeRegister)

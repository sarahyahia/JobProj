import React,{useState, useEffect} from 'react';

import Header from '../../components/header/Header';

import './_employeeRegister.scss';

import {Form, Button, Col, Row, Alert} from 'react-bootstrap';
import CreatableSelect from 'react-select/creatable';

import {getprogramlangs, addemp} from '../../store/actions/emp';
import { connect } from "react-redux";

// import { NavLink } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
const EmployeeRegister = ({userEmail, langs, getprogramlangs}) => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [job_title, setJobTitle] = useState('');
    const [city, setCity] = useState('');
    const [nationalID, setNationalID] = useState('');
    const [experience, setExperience] = useState('');
    const [bio, setBio] = useState('');
    
    useEffect(()=>{
        getprogramlangs();
    },[]);
    
    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    };
    
    const onChangeJobTitle = (e) => {
        const job_title = e.target.value;
        setJobTitle(job_title);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
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
        console.log('d')
        //validation for national ID
        if(!nationalID ){
            setError('Please add your national ID!');
        }else if (nationalID.length !== 14){
            setError('Wrong National ID!');
        }else if (! isNumeric(nationalID)){
            setError('National ID must be a number!');
        }else{
            //here redux action function
            const programming_language = []
            const experience_level=experience
            addemp({name,email,job_title,nationalID,city, programming_language, experience_level})
        }
    }
    // console.log(langs)
    
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <>
        <Header/>
        <div className="empReg">
           <div className="col-9 col-md-7 col-lg-5 col-xl-4 mx-auto ">
            <Row className="justify-content-md-center">
                <Col className="Col__box_emp">
                    <Form onSubmit={handleSubmit}>
                        <h2 className="mb-4">Build Your Profile</h2>
                        {1? 
                            <Alert variant="danger">{error}</Alert>
                            :
                            null
                        }
                        <Form.Group className="mb-3" controlId="formBasicname">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter name" value={name} onChange={onChangeName} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicname">
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control type="name" placeholder="Enter Job Title" value={job_title} onChange={onChangeJobTitle} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicemail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={userEmail || email} onChange={onChangeEmail} />
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
                            <CreatableSelect options={langs} isMulti isClearable />
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

                        <Button variant="danger" type="submit" onClick={handleSubmit}>
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
    langs:state.emp.emp,
    error: state.authUser.error
});

const mapDispatchToProps = (dispatch) => ({
    getprogramlangs: () => {
        dispatch(getprogramlangs())
    },
    addemp :(request) => {
        dispatch(addemp(request))
    },
});

// export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeRegister)

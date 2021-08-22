import React,{useState} from 'react';

import Header from '../../components/header/Header';

import './_employeeRegister.scss';

import { Button, Col, Row} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

// import { NavLink } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';


const EmployeeRegister = () => {

    const [name, setName] = useState('');
    
    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
      };
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <>
        <Header/>
        <div className="empReg">
           <div className="col-9 col-md-7 col-lg-5 col-xl-4 mx-auto empReg-form">
            <Row className="justify-content-md-center">
                <Col className="Col__box">
                    <Form onSubmit={handleSubmit}>
                        <h2 className="mb-4">Build Your Profile</h2>
                        <Form.Group className="mb-3" controlId="formBasicname">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter name" value={name} onChange={onChangeName} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicemail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value='{email}' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasiccity">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="name" placeholder="Enter your city" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicnumber">
                            <Form.Label>National ID</Form.Label>
                            <Form.Control  placeholder="Enter your national ID"  />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicnumber">
                            <Form.Label>Programming Languages</Form.Label>
                            <Form.Control  placeholder="Enter your Programming Languages"  />
                        </Form.Group>

                        <Form.Label>Experience Level</Form.Label>
                        <select className="form-select mb-3" aria-label="Default select example">
                            <option className="text-mute">Select your experience level</option>
                            <option value="Junior">Junior</option>
                            <option value="Mid">Mid</option>
                            <option value="Senior">Senior</option>
                        </select>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Tell us more about you</Form.Label>
                            <Form.Control as="textarea" rows={3} />
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

export default EmployeeRegister

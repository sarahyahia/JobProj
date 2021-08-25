import React from 'react';
import { useState,useEffect } from 'react';

import './_empProf.scss';
import {Row, Col, Card} from 'react-bootstrap';

import {getemp} from '../../store/actions/emp'
import { connect } from "react-redux";


const EmpProf = ({profile, getemp, emp}) => {
    
    console.log(profile);
    
    useEffect(()=>{
        getemp(profile);
    },[]);

    return (
        <Row>
            <Col>
                <Card className="card__box card_box">
                { emp[0] ?
                <Card.Body key={emp[0].user}>
                    <Card.Title id={emp[0].user}>{emp[0].name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{emp[0].job_title}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{emp[0].city}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-danger">{emp[0].views} views</Card.Subtitle>
                    <Card.Text>
                        {emp[0].little_bio}
                    </Card.Text>
                    <Card.Header>E-mail : {emp[0].email}</Card.Header>
                    <Card.Header>Experience Level : {emp[0].experience_level}</Card.Header>
                    <Card.Header>Programming Languages:</Card.Header>
                    <ul>
                     {emp[0].programming_language.map((item)=>(<li id={emp[0].id}>{item.name}</li>))}

                    </ul>
                </Card.Body>  
                : null}
                </Card>
            </Col>
        </Row>
    )
}


const mapStateToProps = (state) => {
    return {
        emp:state.emp.emp,
        error: state.emp.error
    }
};

const mapDispatchToProps = (dispatch) => ({
    getemp: (profile)=>{
        dispatch(getemp(profile))
    }

});
  
export default connect(mapStateToProps, mapDispatchToProps)(EmpProf)

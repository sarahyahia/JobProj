import React from 'react';
import { useState,useEffect } from 'react';

import './_jobProf.scss';
import {Row, Col, Card, Button} from 'react-bootstrap';

import moment from 'moment';

import {getjob} from '../../store/actions/job'
import { connect } from "react-redux";


const JobProf = ({profile, getjob, job}) => {
    
    console.log(profile);
    
    useEffect(()=>{
        getjob(profile);
    },[]);
    
    return (
        <Row>
            <Col>
                <Card className="card__box card_box">
                { job[0] ?
                <Card.Body key={job[0].user}>
                    <Card.Title id={job[0].user}>{job[0].name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{job[0].job_title}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{job[0].city}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{moment.duration(moment().startOf('day').diff(moment(job[0].created_at, "YYYY-MM-DD"))).asDays()} days ago</Card.Subtitle>
                    
                    <Card.Subtitle className="mb-2 text-danger">status: {job.job_status?"closed":"open"}</Card.Subtitle>
                    <Card.Text>
                        {job[0].description}
                    </Card.Text>
                    <Card.Header>Employer : {job[0].user.username} , email({job[0].user.email})</Card.Header>
                    <Card.Header>Experience Level : {job[0].experience_level}</Card.Header>
                    <Card.Header>Programming Languages:</Card.Header>
                    <ul>
                     {job[0].programming_language.map((item)=>(<li id={job[0].id}>{item.name}</li>))}

                    </ul>

                    <Button variant="danger" className="btn-sm mt-2" type="submit">
                        Apply for the job
                    </Button>
                </Card.Body>  
                : null}
                </Card>
            </Col>
        </Row>
    )
}


const mapStateToProps = (state) => {
    return {
        job:state.job.job,
        error: state.job.error
    }
};

const mapDispatchToProps = (dispatch) => ({
    getjob: (profile)=>{
        dispatch(getjob(profile))
    }

});
  
export default connect(mapStateToProps, mapDispatchToProps)(JobProf)

import React from 'react';
import { useState,useEffect } from 'react';

import {getjobs} from '../../store/actions/job'
import { connect } from "react-redux";
// import store from '../../store/index';

import { NavLink} from 'react-router-dom';

import ShowMoreText from "react-show-more-text";
import moment from 'moment';

import './_post.scss';
import {Card, Button} from 'react-bootstrap';


const JobPost = ({jobs, getjobs}) => {
    console.log(jobs)
    useEffect(()=>{
        getjobs();
    },[]);
        
    return (

        jobs.map((item,index)=>(
<Card className="card_box">
        <Card.Body key={index}>
            <Card.Title id={item.id}><NavLink to={`/job/${item.id}`}className="text-dark">{item.job_title}</NavLink></Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{moment.duration(moment().startOf('day').diff(moment(item.created_at, "YYYY-MM-DD"))).asDays()} days ago</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-danger">{item.job_status?"closed":"open"}</Card.Subtitle>
            <ShowMoreText
                /* Default options */
                lines={1}
                more="Show more"
                less="Show less"
                className="content-css"
                anchorClass="my-anchor-css-class"
                // onClick={this.executeOnClick}
                expanded={false}
                width={280}
                truncatedEndingComponent={"... "}
            >
                <Card.Text>
                    {item.description}
                </Card.Text>
                
                <Card.Header>Requirements</Card.Header>
                <ul>
                    <li>Experience Level: {item.experience_level}</li>
                    <li><ul>Programming Languages: {item.programming_language.map((item,index)=>(<li>{item.name}</li>))}</ul></li>

                </ul>
            </ShowMoreText>
        </Card.Body>
        </Card>
    ))

   )
}


const mapStateToProps = (state) => {
    return {
        jobs:state.job.jobs,
        error: state.job.error
    }
};

const mapDispatchToProps = (dispatch) => ({
    getjobs: ()=>{
        dispatch(getjobs())
    }

});
  
export default connect(mapStateToProps, mapDispatchToProps)(JobPost)

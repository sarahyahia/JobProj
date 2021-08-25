import React from 'react';
import { useState,useEffect } from 'react';

import { NavLink} from 'react-router-dom';

import {getemps} from '../../store/actions/emp'
import { connect } from "react-redux";

import ShowMoreText from "react-show-more-text";

import './_empPost.scss';
import {Card, Button} from 'react-bootstrap';


const EmpPost = ({emps, getemps}) => {

    useEffect(()=>{
        getemps();
    },[]);
    
        
    return (

        emps.map((item,index)=>(
        <Card className="card_box">
            <Card.Body key={index}>
            <Card.Title id={item.user}><NavLink to={`/emp/${item.user}`}className="text-dark">{item.name}</NavLink></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.job_title}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{item.city}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-danger">{item.views} views</Card.Subtitle>
                <ShowMoreText
                    lines={1}
                    more="Show more"
                    less="Show less"
                    className="content-css"
                    anchorClass="my-anchor-css-class"
                    expanded={false}
                    width={280}
                    truncatedEndingComponent={"... "}
                >
                    <Card.Text>
                        {item.little_bio}
                    </Card.Text>
                    
                    <Card.Header>Skills</Card.Header>
                    <ul>
                        <li>Experience Level: {item.experience_level}</li>
                        <li><ul>Programming Languages: {item.programming_language.map((item)=>(<li id={item.id}>{item.name}</li>))}</ul></li>

                    </ul>
                </ShowMoreText>
            </Card.Body>
        </Card>
        ))

   )
}


const mapStateToProps = (state) => {
    return {
        emps:state.emp.emps,
        error: state.emp.error
    }
};

const mapDispatchToProps = (dispatch) => ({
    getemps: ()=>{
        dispatch(getemps())
    }

});
  
export default connect(mapStateToProps, mapDispatchToProps)(EmpPost)
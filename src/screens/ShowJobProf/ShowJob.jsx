import React from 'react';
import JobProf from '../../components/JobProf/JobProf';
import Header from '../../components/header/Header';
import NavBar from '../../components/navbar/NavBar';
import './_showJob.scss';


const ShowJob = (props) => {
    const id =props.match.params.id
    return (
        <>
        <NavBar/>
        <Header/>
        <JobProf profile={id}/>
        
        </>
    )
}

export default ShowJob

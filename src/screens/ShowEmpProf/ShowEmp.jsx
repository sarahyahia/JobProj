import React from 'react';
import EmpProf from '../../components/empProf/EmpProf';
import Header from '../../components/header/Header';
import NavBar from '../../components/navbar/NavBar';
import './_showEmp.scss';


const ShowEmp = (props) => {
    const id = props.location.pathname;
    return (
        <>
        <NavBar/>
        <Header/>
        <EmpProf profile={id}/>
        
        </>
    )
}

export default ShowEmp

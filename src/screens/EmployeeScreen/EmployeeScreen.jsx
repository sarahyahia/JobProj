import React from 'react'
import Header from '../../components/header/Header'
import "./_employeeScreen.scss";
import NavBar from '../../components/navbar/NavBar';
import EmpPost from '../../components/empPost/EmpPost';

const EmployeeScreen = () => {
    return (
        <>
           <NavBar/>
            <Header/>
            <h1 className="m-5 pl-5">Employees</h1>
            <EmpPost/> 
        </>
    )
}

export default EmployeeScreen

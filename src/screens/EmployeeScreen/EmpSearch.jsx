import React from 'react';
import EmpHeader from '../../components/header/EmpHeader';
import "./_employeeScreen.scss";
import NavBar from '../../components/navbar/NavBar';
import EmpPost from '../../components/empPost/EmpPost';

const EmpSearch = () => {
    return (
        <>
            <NavBar/>
            <EmpHeader/>
            <h1 className="m-5 pl-5">Employees</h1>
            <EmpPost/>
        </>
    )
}

export default EmpSearch
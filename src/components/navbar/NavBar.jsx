import './_navbar.scss';

import React from 'react';
import {Nav, Container, Navbar} from 'react-bootstrap';
import { NavLink, Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <>
           <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Job Club</Navbar.Brand>
                <Nav className="me-auto">
                <Link className="navLink" to={`/`} style={{ textDecoration: 'none' }}> 
                Home
              </Link> 

              <Link  className="navLink"  to={`/Shows`} style={{ textDecoration: 'none'}}> 
                Add a Job
              </Link>
              <Link  className="navLink"  to={`/emp`} style={{ textDecoration: 'none'}}> 
                Search for employees
              </Link>
              <Link className="navLink" to={`/job`} style={{ textDecoration: 'none' }}> 
                Search for Jobs
            </Link>
                </Nav>
            </Container>
          </Navbar> 
        </>
    )
}

export default NavBar

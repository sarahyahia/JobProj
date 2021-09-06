import React, {useState} from 'react';
import "./_header.scss";

import { AiOutlineSearch } from "react-icons/ai";
import {FiLogOut} from "react-icons/fi";

import { withRouter, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import {logout} from '../../store/actions/auth'
import {searchemp} from '../../store/actions/emp'
import{Form} from 'react-bootstrap';

import Select from 'react-select';

const EmpHeader = ({isLoggedIn, logout, searchemp}) => {

    const [search,setSearch] =useState('');
    const [option,setOption] =useState('');
    let history = useHistory();
    const options = [
        { value: 'little_bio', label: 'Biography' },
        { value: 'programming_language', label: 'Programming Language' },
        { value: 'city', label: 'city' },
        { value: 'experience_level', label: 'Experience Level' },
        { value: 'job_title', label: 'Job Title' },
        { value: 'all', label: 'All' },

    ]

    const handleChange =(e)=>{
        setOption(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const params= `${option}=${search}`
        searchemp(params)
        history.push(`/search/${option}=${search}`);
    }

    return (
        <div className="header">
            <form onSubmit={handleSubmit}>
            <select className="select_box" value={option} onChange={handleChange} name="cars" id="cars">
               {options.map((item)=> (<option value={item.value}>{item.label}</option>))}
            </select>
                <input 
                    type="text" 
                    placeholder="Search"
                    value={search} 
                    onChange={(e)=>setSearch(e.target.value)} />

                <button type="submit">
                    <AiOutlineSearch size={22} />
                </button>

            </form>
            {isLoggedIn && localStorage.token ?
                <button type="logout" onClick={logout}>
                    <FiLogOut size={22} /> Logout
                </button>
                :  null
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    error: state.authUser.error,
    isLoggedIn: state.authUser.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => {
        dispatch(logout())
    },
    searchemp:(search)=>{
        dispatch(searchemp(search))
    }
  });
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EmpHeader));
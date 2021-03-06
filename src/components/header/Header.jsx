import React, {useState} from 'react';
import "./_header.scss";

import { AiOutlineSearch } from "react-icons/ai";
import {FiLogOut} from "react-icons/fi";

import { withRouter, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import {logout} from '../../store/actions/auth'
import {searchjob} from '../../store/actions/job'

const Header = ({isLoggedIn, logout, searchjob}) => {

    const [search,setSearch] =useState('')
    let history = useHistory();
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        searchjob(search)
        history.push(`/search=${search}`);
    }

    return (
        <div className="header">
            <form onSubmit={handleSubmit}>
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
    searchjob:(search)=>{
        dispatch(searchjob(search))
    }
  });
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

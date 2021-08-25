import React from 'react'
import Header from '../../components/header/Header'
import "./_homeScreen.scss";
import NavBar from '../../components/navbar/NavBar';
import Post from '../../components/post/Post';

const HomeScreen = () => {
    return (
        <>
            <NavBar/>
            <Header/>
            <h1 className="m-5 pl-5">Jobs</h1>
            <Post/>
        </>
    )
}

export default HomeScreen

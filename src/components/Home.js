import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from './SignUp'

const Home = () => {
    
    return (
        <h2>New to List App? <Link to="/signup">Sign up</Link> here!</h2>
    )
}

export default Home;

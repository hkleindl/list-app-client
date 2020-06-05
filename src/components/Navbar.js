import React from 'react'
import { connect } from 'react-redux'
import Login from "./Login.js"
import Logout from "./Logout.js"

const Navbar = ({ currentUser }) => {
    
    return (
        <div className="Navbar">
            { currentUser ? `Welcome, ${currentUser.attributes.username}` : <p>Welcome to List App</p>}
            { currentUser ? <Logout/> : <Login/> }
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(Navbar)
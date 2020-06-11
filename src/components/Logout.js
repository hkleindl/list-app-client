import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser.js'

const Logout = ({logout}) => {
    
    return (
        <button class="btn btn-secondary dropdown-item" onClick={logout}>Log Out</button>
    )
}

export default connect(null, { logout })(Logout)
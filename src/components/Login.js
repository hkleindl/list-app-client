import React from 'react'
import { connect } from 'react-redux'

const Login = (props) => {
    return (
        <form onSubmit={}>
            <input type="text" name="username" value={props.username} onChange={} placeholder="Username"/>
            <input type="password" name="password" value={props.password} onChange={} placeholder="Password"/>
            <input type="submit" value="Log In"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        username: state.loginForm.username,
        password: state.loginForm.password
    }
}



export default connect(mapStateToProps)(Login)
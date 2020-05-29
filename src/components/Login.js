import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'
import { login } from '../actions/currentUser.js'
 

const Login = ({ loginForm, updateLoginForm, login }) => {
    // the argument for Login represents props
    const handleInputChange = e => {
        const { name, value } = e.target
        const updatedFormInfo = {
            ...loginForm,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleOnSubmit = e => {
        e.preventDefault()
        login(loginForm)
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" name="username" value={loginForm.username} onChange={handleInputChange} placeholder="Username"/>
            <input type="password" name="password" value={loginForm.password} onChange={handleInputChange} placeholder="Password"/>
            <input type="submit" value="Log In"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)
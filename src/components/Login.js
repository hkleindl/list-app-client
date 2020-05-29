import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'
 

const Login = ({ loginForm, updateLoginForm }) => {
    // the argument for Login represents props
    const handleInputChange = e => {
        const { name, value } = e.target
        const updatedFormInfo = {
            ...loginForm,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    return (
        <form onSubmit={undefined}>
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

export default connect(mapStateToProps, { updateLoginForm })(Login)
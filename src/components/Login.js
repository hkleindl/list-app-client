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
            <div className="form-inline">
                <input className="form-control form-control-sm mr-2" type="text" name="username" value={loginForm.username} onChange={handleInputChange} placeholder="Username"/>
                <input className="form-control form-control-sm mr-2" type="password" name="password" value={loginForm.password} onChange={handleInputChange} placeholder="Password"/>
                <input className="btn btn-secondary btn-sm form-control form-control-sm mr-2" type="submit" value="Log In"/>
            </div>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)
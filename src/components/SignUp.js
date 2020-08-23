import React from 'react'
import { connect } from 'react-redux'
import { updateSignUpForm } from '../actions/SignUpForm.js'
import { signUp } from '../actions/currentUser.js'

const SignUp = ({ signUpFormData, updateSignUpForm, signUp }) => {
    
    const handleInputChange = e => {
        const { name, value } = e.target
        const updatedFormInfo = {
            ...signUpFormData,
            [name]: value
        }
        updateSignUpForm(updatedFormInfo)
    }

    const handleOnSubmit = e => {
        e.preventDefault()
        signUp(SignUpFormData)
    }
    
    return (
        <form onSubmit={handleOnSubmit}>
            <div class="form-inline">
                <input class="form-control form-control-sm mr-2" type="text" name="username" value={signUpFormData.username} onChange={handleInputChange} placeholder="Username"/>
                <input class="form-control form-control-sm mr-2" type="password" name="password" value={signUpFormData.password} onChange={handleInputChange} placeholder="Password"/>
                <input class="btn btn-secondary btn-sm form-control form-control-sm mr-2" type="submit" value="Sign Up"/>
            </div>
        </form>
    )
}

const mapStateToProps = ({ signUpForm }) => {
    return {
        signUpForm
    }
    
}

export default connect(mapStateToProps, { updateSignUpForm, signUp })(SignUp)
export const updateSignUpForm = (formData) => {
    return {
        type: "UPDATE_SIGN_UP_FORM", 
        formData
    }
}

export const clearSignUpForm = () => {
    return {
        type: "CLEAR_SIGN_UP_FORM"
    }
}


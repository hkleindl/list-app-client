const initialState = {
    username: "",
    password: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SIGN_UP_FORM':
            return action.formData
        case 'CLEAR_SIGN_UP_FORM':
            return initialState
        default:
            return state
    }
}
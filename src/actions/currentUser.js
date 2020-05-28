export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}
// async action creators
export const login = credentials => {
    return dispatch => {
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(credentials)
        }
        return fetch("https://localhost:3000/api/v1/login", configObj)
    }
}
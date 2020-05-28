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
            
        }
        return fetch("https://localhost:3000", configObj)
    }
}
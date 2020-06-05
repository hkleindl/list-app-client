import { clearLoginForm } from "./loginForm.js"

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () => {
    return  {
        type: "CLEAR_CURRENT_USER"
    }
}

// async action creators
export const login = credentials => {
    return dispatch => {
        const configObj = {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(credentials)
        }
        return fetch("http://localhost:3000/api/v1/login", configObj)
            .then(r => r.json())
            .then(json => {
                if (json.error) {
                    alert(json.error)
                } else {
                    dispatch(setCurrentUser(json.data))
                    dispatch(clearLoginForm())
                }
            }  
            )
            .catch(console.log)
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch("http://localhost:3000/api/v1/logout", {
            credentials: "include",
            method: "DELETE"
        }
        )
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        const configObj = {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            }
        }
        return fetch("http://localhost:3000/api/v1/get_current_user", configObj)
            .then(r => r.json())
            .then(json => {
                if (json.error) {
                    alert(json.error)
                } else {
                    dispatch(setCurrentUser(json.data))
                }
            }  
            )
            .catch(console.log)
    }
}
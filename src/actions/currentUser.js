export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}
// async action creators
export const login = credentials => {
    console.log("credentials are ", credentials)
    return dispatch => {
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(credentials)
        }
        return fetch("http://localhost:3000/api/v1/login", configObj)
            .then(r => r.json())
            .then(user => {
                if (user.error) {
                    alert(user.error)
                } else {
                    dispatch(setCurrentUser(user))
                }
            }  
            )
            .catch(console.log)
    }
}

export const getCurrentUser = credentials => {
    return dispatch => {
        const configObj = {
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            }
        }
        return fetch("http://localhost:3000/api/v1/login", configObj)
            .then(r => r.json())
            .then(user => {
                if (user.error) {
                    alert(user.error)
                } else {
                    dispatch(setCurrentUser(user))
                }
            }  
            )
            .catch(console.log)
    }
}
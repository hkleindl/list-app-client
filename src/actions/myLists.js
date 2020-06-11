export const setMyLists = lists => {
    return {
        type: "SET_MY_LISTS",
        lists
    }
}

export const getMyLists = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/lists", {
            credentials: "include", 
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(r => r.json())
        .then(json => {
            console.log(json.data)
            if (json.error) {
                alert(json.error)
            } else {
                dispatch(setMyLists(json))
            }
        })
        .catch(console.log)
    }
}
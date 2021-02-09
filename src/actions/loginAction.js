import axios from 'axios'
function loginaction(logindata) {
    return (dispatch) => {
        console.log("inreturn")
        dispatch({ type: "LOGIN_START" })
        axios.get(`http://localhost:8000/api/login/login?empID=${logindata.empID}&password=${logindata.password}`)
            .then(response => {
                
                const res = response.data 
                return (
                    response.data.success = "yes" ?
                        dispatch({
                            type: "LOGIN_SUCCESS",
                            payload: res
                        })
                        :
                        dispatch({
                            type: "LOGIN_FAILURE",
                            payload: "fail"
                        })
                )
                    }

            )
            .catch
            (error => {
                dispatch({
                    type: "LOGIN_FAILURE",
                    payload: error
                })
            }

            )



    }
}


export default loginaction
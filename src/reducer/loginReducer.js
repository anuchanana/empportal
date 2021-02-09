

function loginreducer(state, action) {
    state = {
        loading: false,


        user: {
            emp: {
            },
            config: { }
        }
    }

    switch (action.type) {
        case "LOGIN_START":

            console.log("starting")

            return {
                ...state,
                loading: true
            }

        case "LOGIN_SUCCESS":
                       
            return {
                ...state,
                loading: false,
                user: action.payload          
            }


        case "LOGIN_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return { ...state }
    }

}
export default loginreducer
import actionType from '../actions/actionTypes';
// eslint-disable-next-line

export const loginReducerInitials = {
   userExists:false
}

function loginReducer(state = loginReducerInitials, action: any) {
    switch (action.type) {

        case actionType.LOGINACTION:
            console.log(action.payload)
            return {
                ...state
            }
        case actionType.SIGNUPACTION:
            console.log(action.payload)
            return {
                ...state
            }
        case actionType.CHECKUSERACTION:
            return {
                ...state,
                userExists:action.payload && Object.keys(action.payload).length>0 && Object.keys(action.payload.data).length>0 && action.payload.data.success ?true:false
            }

        default:
            return state
    }
}
export default loginReducer

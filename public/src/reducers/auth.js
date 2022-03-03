import { LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT,USER_LODED,AUTH_ERROR } from '../actions/types'

const initialState ={
    token:localStorage.getItem('token'),
    isAuthenticated: null,
    loading : true,
    user:null
}

export default function(state = initialState, action){
    
    const {type , payload} = action

    switch(type){
        case USER_LODED: 
           return {
               ...state ,
               isAuthenticated: true,
               loading:false,
               user:payload
           }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticated:true,
                loading:false
            }
        case LOGOUT:
        case LOGIN_FAIL:
        case AUTH_ERROR:
            localStorage.removeItem('token')
            return {
                ...state,
                token:null,
                isAuthenticated:false,
                loading:false
            }
        default:
            return state
    }
}
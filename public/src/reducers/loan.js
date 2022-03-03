import {POST_LOAN, GET_LOAN, LOAN_ERROR, DELETE_LOAN} from '../actions/types'

const initialState = {
    loans:[],
    loan:null,
    loading:true,
    error:null
}


export default function(state = initialState, action){
   const {type, payload} = action
     
   switch(type){
      case POST_LOAN:
          return{
              ...state,
              loan:payload,
              loading:false
          }
       case GET_LOAN:
           return {
               ...state,
               loans:payload,
               loading:false
           }
        case DELETE_LOAN:
            return{
                ...state,
                loans:state.loans.filter(loan=> loan._id !== payload),
                loading:false
            }
        case LOAN_ERROR:
            return{
                ...state,
                error:payload,
                loading:false
            }
        default:
            return state
   }



}










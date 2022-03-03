import {POST_STUDENT, STUDENT_ERROR, GET_STUDENT, REMOVE_STUDENT} from '../actions/types'

const initialState ={
    students:[],
    student:null,
    loading:true,
    error:null
}


export default function(state= initialState, action){
      const { type,payload } = action

      switch(type){
          case GET_STUDENT:
              return {
                  ...state,
                  students:payload,
                  loading:false
              }
          case POST_STUDENT:
              return{
                  ...state,
                  student:payload,
                  loading:false
              }
            case REMOVE_STUDENT:
                return {
                    ...state,
                    students:state.students.filter(student => student._id !== payload),
                    loading:false
                }
           case STUDENT_ERROR:
               return{
                   ...state,
                   error:payload,
                   loading:false
               }
            default:
                return state
      }
}




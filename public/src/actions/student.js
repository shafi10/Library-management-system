import axios from 'axios'
import {POST_STUDENT, STUDENT_ERROR, GET_STUDENT, REMOVE_STUDENT} from './types'
import {setAlert} from './alert'

export const insertStudent = ({sId,name,email}) => async dispatch =>{
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
   
    const body = JSON.stringify({ sId,name,email})
    try {
        const {data} = await axios.post('/student',body, config)
        dispatch({
            type:POST_STUDENT,
            payload:data
        })
        dispatch(setAlert('New Student Inserted', 'success'))
    } catch (error) {
        const errors = error.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type:STUDENT_ERROR
        })
    }
}

export const getStudents = () => async dispatch =>{
    try {
        const {data} = await axios.get('/student')
        dispatch({
            type:GET_STUDENT,
            payload:data
        })
    } catch (error) {
       dispatch({
           type:STUDENT_ERROR,
           payload:error
       })     
    }
}

export const removeStudent = (id)  => async dispatch =>{
      try {
          const {data} = await axios.delete('/student/delete/'+id)

          dispatch({
              type:REMOVE_STUDENT,
              payload:id
          })
          dispatch(setAlert('Student Removed', 'danger'))
      } catch (error) {
        dispatch({
            type:STUDENT_ERROR,
            payload:error
        })    
      }
}
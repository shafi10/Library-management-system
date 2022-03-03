import axios from 'axios'
import { GET_LOAN,POST_LOAN,LOAN_ERROR,DELETE_LOAN } from './types'
import {setAlert} from './alert'

export const postLoan = ({book, sId, student, deadline}) => async dispatch => {
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
   
    const body = JSON.stringify({book, sId, student, deadline})
    try {
        const {data } = await axios.post('/loan',body, config)


        dispatch({
            type:POST_LOAN,
            payload:data
        })
        dispatch(setAlert('New loan Inserted', 'success'))
    } catch (error) {
        dispatch({
            type:LOAN_ERROR,
            payload:error
        })
    }
}


export const getLoan = () =>  async dispatch =>{
    try {
        const {data} = await axios.get('loan');

        dispatch({
            type:GET_LOAN,
            payload:data
        })
    } catch (error) {
       dispatch({
           type:LOAN_ERROR,
           payload:error
       }) 
    }
}

export const removeLoan = (id,book) => async dispatch => {
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
   
    const body = JSON.stringify({book})
    try {
        const {data } = await axios.post('/loan/delete/'+id,body, config)


        dispatch({
            type:DELETE_LOAN,
            payload:id
        })
        dispatch(setAlert('Loan deleted', 'danger'))
    } catch (error) {
        dispatch({
            type:LOAN_ERROR,
            payload:error
        })
    }
}







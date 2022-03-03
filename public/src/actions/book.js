import axios from 'axios'
import {POST_BOOK, BOOK_ERROR, GET_BOOK, SINGLE_BOOK, DELETE_BOOK, UPDATE_BOOK} from './types'
import {setAlert} from './alert'

export const insertBook = ({name,category, inStock}) => async dispatch =>{
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
   
    const body = JSON.stringify({ name, category,inStock})
    try {
        const {data} = await axios.post('/book',body, config)
        dispatch({
            type:POST_BOOK,
            payload:data
        })
        dispatch(setAlert('New book Inserted', 'success'))
    } catch (error) {
        const errors = error.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type:BOOK_ERROR
        })
    }
}

export const getBooks = () => async dispatch =>{
    try {
        const {data} = await axios.get('/book')
        dispatch({
            type:GET_BOOK,
            payload:data
        })
    } catch (error) {
       dispatch({
           type:BOOK_ERROR,
           payload:error
       })     
    }
}

export const removeBook = (bookId) => async dispatch =>{
    try {
     const res = await axios.delete('/book/delete/'+bookId);
     dispatch({
         type:DELETE_BOOK,
         payload:bookId
     })
    } catch (error) {
     dispatch({
         type:BOOK_ERROR
     })
    }
 
 }


 export const singleBook = (id) => async dispatch =>{
     try {
         let {data} = await axios.get('/book/single/'+id)

         dispatch({
             type:SINGLE_BOOK,
             payload:data
         })
     } catch (error) {
         dispatch({
             type:BOOK_ERROR
         })
     }
 }

 export const updateBook = (id, formData) => async dispatch =>{
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    try {
        const {data} = await axios.put('/book/update/'+id,formData , config)
        dispatch({
            type:UPDATE_BOOK,
            payload:data
        })
        dispatch(setAlert(' book Updated', 'success'))
    } catch (error) {
        const errors = error.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type:BOOK_ERROR
        })
    }
}


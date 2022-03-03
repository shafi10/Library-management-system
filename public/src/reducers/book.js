import {POST_BOOK,BOOK_ERROR, GET_BOOK, UPDATE_BOOK, DELETE_BOOK, SINGLE_BOOK} from '../actions/types'
import { singleBook } from '../actions/book'

const initialState = {
    books:[],
    book:null,
    loading:true,
    error:null
}


export default function(state = initialState, action){
    const {type, payload} = action

    switch(type){
        case POST_BOOK:
            return{
                ...state,
                book:payload,
                loading:false
            }
        case GET_BOOK:
            return{
               ...state,
               books:payload,
               loading:false
            }
        case SINGLE_BOOK:
            return{
                ...state,
                book:payload,
                loading:false
            }
        case DELETE_BOOK:
            return {
                ...state,
                books:state.books.filter(book => book._id !== payload),
                loading:false
            }
        case UPDATE_BOOK:
            return {
                ...state,
                loading:false
            }
        case BOOK_ERROR:
            return{
                ...state,
                loading:false,
                error:payload
            }
        default:
            return state
    }
}
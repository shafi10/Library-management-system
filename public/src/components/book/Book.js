import React,{useEffect} from 'react'
import {Link } from 'react-router-dom'
import {getBooks, removeBook} from '../../actions/book'
import {useDispatch, useSelector} from 'react-redux'
import Spinner from '../../components/spinner/Spinner'

const Book = () => {
   const dispatch = useDispatch()
   const deleteBook =(id) =>{
    dispatch(removeBook(id))
      }

    useEffect(() => {
     dispatch(getBooks())
     }, [])

  const {books, loading} = useSelector(state => state.book)
    return (
        loading ? <Spinner /> :
        <div>
            <div>
                <Link className="btn" to="/insertBook">Insert Book</Link>
            </div>
            <div className="heading">
                Books List
            </div>
            <table id="books">
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
            {books.length > 0 && books.map(book =>        
             <tr>
               <td>{book.name}</td>
               <td>{book.category}</td>
               <td>{ book.inStock > 0 ? book.inStock : 'Out Of Stock'}</td>
               <td>
                   <button className="btn" onClick= {() => deleteBook(book._id)}>Delete</button>
                   <Link className="btn" to={'/updateBook/'+ book._id}>Update</Link>
               </td>
              </tr>
               ) }
            </table>
        </div>
    )
}

export default Book

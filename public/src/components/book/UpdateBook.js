import React,{Fragment,useEffect,useState} from 'react'
import {singleBook, updateBook} from '../../actions/book'
import {useDispatch, useSelector} from 'react-redux'

const UpdateBook = (props) => {
         const dispatch = useDispatch()
        useEffect(() =>{
            dispatch(singleBook(props.match.params.id))
        },[])
     const { book } = useSelector(state => state.book)

    const [formData, setFormData ] = useState({
        name:'',
        category:'',
        inStock:''
    });

    const openData = (book) =>{
      setFormData({
        name:book.name,
        category:book.category,
        inStock:book.inStock
      })
    }
     
    const {name , category, inStock} = formData
   const onChange = e => setFormData({...formData, [e.target.name]:e.target.value});
   const onSubmit = async e => {
       e.preventDefault();
       
         dispatch(updateBook(props.match.params.id, formData))
   }


    return (
        <Fragment>
            
      <p className="lead"><i class="fas fa-book"></i>Update a Book</p>
      <div>
        are you sure to update data<button className="btn" onClick={() => openData(book)}>submit</button>
      </div>
      <form className="form" onSubmit = {e => onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="Book Name" name="name"
          value = {name}
          onChange = {e => onChange(e)}
          required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Categoory"
            name="category"
            value = {category}
          onChange = {e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="IN Stock"
            name="inStock"
            value = {inStock}
          onChange = {e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn" value="Submit" />
      </form>
        </Fragment>
    )
}

export default UpdateBook
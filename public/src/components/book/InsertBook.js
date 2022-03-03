import React,{Fragment,useState} from 'react'
import {insertBook} from '../../actions/book'
import {useDispatch} from 'react-redux'

const InsertBook = (props) => {
      const dispatch = useDispatch()
    const [formData, setFormData ] = useState({
        name:'',
        category:'',
        inStock:''
    });
     
    const {name , category, inStock} = formData
   const onChange = e => setFormData({...formData, [e.target.name]:e.target.value});
   const onSubmit = async e => {
       e.preventDefault();
       dispatch(insertBook({name,category, inStock}))
       props.history.push('/book')
   }


    return (
        <Fragment>
            
      <p className="lead"><i class="fas fa-book"></i>Insert a New Book</p>
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
            placeholder="In Stock"
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

export default InsertBook

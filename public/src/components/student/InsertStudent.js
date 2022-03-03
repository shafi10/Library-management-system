import React,{Fragment,useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {insertStudent} from '../../actions/student'

const InsertStudent = () => {
    const dispatch = useDispatch()
    const [formData, setFormData ] = useState({
        sId:'',
        name:'',
        email:''
    });
     
    const {sId,name , email} = formData
   const onChange = e => setFormData({...formData, [e.target.name]:e.target.value});
   const onSubmit = async e => {
       e.preventDefault();
       dispatch(insertStudent({sId,name , email}))        
   }


    return (
        <Fragment>
            
      <p className="lead"><i className="fas fa-user"></i>Insert a New Student</p>
      <form className="form" onSubmit = {e => onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="Student Id" name="sId"
          value = {sId}
          onChange = {e => onChange(e)}
          required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value = {name}
          onChange = {e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value = {email}
          onChange = {e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn" value="Submit" />
      </form>
        </Fragment>
    )
}

export default InsertStudent
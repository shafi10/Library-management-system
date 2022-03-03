import React,{Fragment,useState} from 'react'
import {Link,  Redirect} from 'react-router-dom'
import { login } from '../../actions/auth'
import {useDispatch, useSelector} from 'react-redux'

const Login = (props) => {
   
    const [formData, setFormData ] = useState({
        email:'',
        password:''
    });

    const {isAuthenticated} =  useSelector(state => state.auth)
     const dispatch = useDispatch()
    const {email , password} = formData
   const onChange = e => setFormData({...formData, [e.target.name]:e.target.value});
   const onSubmit = async e => {
       e.preventDefault();
       
         dispatch(login(email, password))
   }
   if(isAuthenticated){
    return <Redirect to='/dashboard' />
  }

    return (
             <Fragment>
            
            <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
      <form className="form" onSubmit = {e => onSubmit(e)}>
        <div className="form-group">
          <label>Email Address</label><br></br>
          <input type="email" placeholder="Email Address" name="email"
          value = {email}
          onChange = {e => onChange(e)}
          required
          />
        </div>

        <div className="form-group">
        <label>Password</label><br></br>
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value = {password}
          onChange = {e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn" value="Login" />
      </form>
        </Fragment>
    )
}

export default Login

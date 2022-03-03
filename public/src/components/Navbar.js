import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from './../actions/auth'

const Navbar = () => {
    const dispatch = useDispatch()
     const {isAuthenticated} = useSelector(state => state.auth)
    const submitLogout =()=>{
      dispatch(logout())
    }
    return (
        <div className ="header">
            <div className="logo"><Link className="link" to="/">Library Management</Link></div>
            <div className="nav">
                <ul>
                    { !isAuthenticated ?
                    <li><Link className="link" to="/login">Login</Link></li>:<>
                    <li><Link className="link" to="/dashboard">Dashboard</Link></li>
                    <li><Link onClick={(e) => submitLogout()} className="link" to="/">Logout</Link></li>
                 </>
                 }
                    </ul>
            </div>
        </div>
    )
}

export default Navbar

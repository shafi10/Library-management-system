import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Manubar = () => {
  const {isAuthenticated } = useSelector(state => state.auth)
    return (
        
        <div className="manu">
            {isAuthenticated ? 
            <ul>
                <li><Link className="link" to="/book"><i class="fas fa-book icon"></i>Books</Link></li>
                <li><Link  className="link" to="/student"><i class="fas fa-user-graduate icon"></i>Students</Link></li>
                <li><Link  className="link" to="/loan"><i class="fas fa-tasks icon"></i>Book Loan</Link></li>
            </ul>: <div> </div>
            }
        </div>
        
    )
}

export default Manubar

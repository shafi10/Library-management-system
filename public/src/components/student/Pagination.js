import React from 'react'
import {Link} from 'react-router-dom'

 const Pagination = ({studentPerPage, totalStudents, paginate}) => {
   
        const pageNumbers = []
        for(let i =1; i <= Math.ceil(totalStudents/studentPerPage); i++){
            pageNumbers.push(i)
        }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number =>(
                   <li key ={number}><Link className="number" onClick={() => paginate(number)} to="/student">{number}</Link></li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;

import React,{useEffect,useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getLoan, removeLoan} from '../../actions/loan'
import {Link} from 'react-router-dom'

 const Loan = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
     const [searchItem, setSearchItem] = useState([])
    useEffect(()=>{
      dispatch(getLoan())
    },[])
   const {loans} = useSelector(state => state.loan)

   useEffect(()=>{
    setSearchItem(
  loans.filter(loan =>{
      return loan.sId.includes(search)
  }))
},[search,loans])
 const deleteLoan =(id , book)=>{
     dispatch( removeLoan(id, book))
 }
 

    return (
        <div>
            <div>
            <Link className="btn" to="/insertLoan">Add New Loan</Link>
        </div>
        <div className="heading">
            Book Loan List
        </div>
        <div>
        <input type="text" className="loan-sel" placeholder="Search Book Loan With Student ID" name="search"
                 value = {search}
                 onChange= { (e) => setSearch(e.target.value)} />
        </div>
        <table id="books">
        <tr>
          <th>Student Id</th>
          <th>Student Name</th>
          <th>Book Name</th>
          <th>Submit Date</th>
          <th>Deadline Date</th>
          <th>Action</th>
        </tr>
        { searchItem.length > 0 && searchItem.map(loan =>
            
         <tr>
           <td>{loan.sId}</td>
           <td>{loan.student}</td>
           <td>{loan.book}</td>
           <td>{loan.date}</td>
           <td>{loan.deadline}</td>
           <td>
               <button className="btn" onClick={() => deleteLoan(loan._id, loan.book)} >Delete</button>
           </td>
          </tr>
          ) }
        </table>
        </div>
    )
}

export default Loan

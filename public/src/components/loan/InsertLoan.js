import React,{useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getBooks} from '../../actions/book'
import {getStudents} from '../../actions/student' 
import {postLoan} from '../../actions/loan'


 const InsertLoan = () => {

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch( getBooks())
        dispatch( getStudents())
    },[])
    const {books} = useSelector(state => state.book)
    const {students} = useSelector(state => state.student)
   
     const [sId, setsId] = useState('')
     const [student, setStudent] = useState('')
     const [book, setBook] = useState('')
     const [deadline, setDeadline] = useState('')

     const submitLoan = () =>{
         dispatch(postLoan({ book, sId, student, deadline}))
     }
     
    return (
        <div className="loan">
             <div>
                 <h1>Insert a new Book Loan</h1>
             </div>
             <div>
               <label>Student Id: </label> 
              <input type="text" className="loan-sel" placeholder="Student Id" name="sId"
                 value = {sId}
                 onChange= { (e) => setsId(e.target.value)}
                 required
               />
              </div>
              <div>
              <label>Student Name: </label>
              <input
                type="text"
                placeholder="Name"
               name="student"
               value = {student}
               onChange= { (e) => setStudent(e.target.value)}
              />
              </div>
              <div>
                Book Name: <select className="loan-select" value={book} onChange= { (e) => setBook(e.target.value)}>
               {books.map(x => 
                x.inStock > 0 &&
                <option key={x._id} value={x.name}>{ x.name}</option>)
               
              }
              </select>
              </div>
              <div>
               <label for="date">Loan Expaire Date:</label>
               <input type="date" name="deadline" value={deadline} onChange= { (e) => setDeadline(e.target.value)} />
              </div>

              <button className="btn" onClick ={submitLoan}> submit </button>
        </div>
    )
}

export default InsertLoan
import React,{useEffect,useState} from 'react'
import {Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getStudents, removeStudent} from '../../actions/student'
import Spinner from '../../components/spinner/Spinner'
import Pagination from './Pagination'


const Student = () => {
     const [search, setSearch] = useState('')
     const [searchItem, setSearchItem] = useState([])
     const [currentPage, setCurrentPage] = useState(1)
     const [studentPerPage, setStudentPerPage] = useState(2)
    
     
     const dispatch = useDispatch()
    const { students,loading } = useSelector(state => state.student)
    useEffect(()=>{
     dispatch(getStudents())    
    },[])
    useEffect(()=>{
        setSearchItem(
      students.filter(student =>{
          return student.sId.includes(search)
      }))
    },[search,students])

    const deleteStudent =(id) =>{
          dispatch(removeStudent(id))
    }

   
    const indexOfLastPost = currentPage * studentPerPage;
    const indexOfFirsePost = indexOfLastPost - studentPerPage;
    const currentStudents = searchItem.slice(indexOfFirsePost, indexOfLastPost)

      const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        loading ? <Spinner /> :
        <div>
        <div>
            <Link className="btn" to="/insertStudent">Add New Student</Link>
        </div>
        <div className="heading">
            Student List
        </div>
        <div>
        <input type="text" className="loan-sel" placeholder="Search Student" name="search"
                 value = {search}
                 onChange= { (e) => setSearch(e.target.value)} />
        </div>
        <table id="books">
        <tr>
          <th>Student Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        { currentStudents.length > 0 && currentStudents.map(student =>
            
         <tr>
           <td>{student.sId}</td>
           <td>{student.name}</td>
           <td>{student.email}</td>
           <td>
               <button className="btn"onClick={() => deleteStudent(student._id)} >Delete</button>
           </td>
          </tr>
          ) }
        </table>
        <div className="page">
          <Pagination studentPerPage={studentPerPage} totalStudents={students.length} paginate={paginate}/>
        </div>
    </div>
    )
}

export default Student

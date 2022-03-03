import React,{useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Manubar from './components/Manubar';
import Login from './components/auth/Login'
import Dashboard from './components/dashboard/Dashboard'
import Book from './components/book/Book'
import InsertBook from './components/book/InsertBook'
import UpdateBook from './components/book/UpdateBook'
import Student from './components/student/Student'
import insertStudent from './components/student/InsertStudent'
import Alert from './components/Alert'
import setAuthToken from './utils/setAuthToken'
import {loadUser} from './actions/auth'
import Loan from './components/loan/Loan'
import InsertLoan from './components/loan/InsertLoan'
import Home from './components/Home'
import Footer from './components/Footer'
import { Provider } from 'react-redux';
import store from './store'

if(localStorage.token){
  setAuthToken(localStorage.token)
}

function App() {
  
  useEffect(()=>{
     store.dispatch(loadUser())
  },[])
  return (
    <Provider store = {store}>
    <Router>
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Home} />
      <Manubar />
      <div className="container">
      <Alert />
      <Switch>
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/book' component={Book} />
          <Route exact path='/InsertBook' component={InsertBook} />
          <Route exact path='/updateBook/:id' component={UpdateBook} />
          <Route exact path='/student' component={Student} />
          <Route exact path='/insertStudent' component={insertStudent} />
          <Route exact path='/loan' component={Loan} />
          <Route exact path='/insertLoan' component={InsertLoan} />
     </Switch>
      </div>
      <Footer />
    </div>
     </Router>
     </Provider>
  );
}

export default App;

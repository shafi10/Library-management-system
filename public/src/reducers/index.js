import { combineReducers} from 'redux';
import alert from './alert'
import auth from './auth'
import book from './book'
import student from './student'
import loan from './loan'

export default combineReducers({
  alert,auth, book, student, loan
});
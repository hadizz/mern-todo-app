import { combineReducers } from 'redux'
import todos from './todos'
import tags from './tags'

export default combineReducers({
  todos,
  tags
})

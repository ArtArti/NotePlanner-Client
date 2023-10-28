import { createStore, combineReducers } from 'redux'


// import changeState from './Reducer/ChangeState'
import changeState from './Reducer/ChangeState'
import TodoReducer from './Reducer/TodoReducer'


const rootReducer = combineReducers({changeState:changeState, todo:TodoReducer })

const store = createStore(rootReducer)
export default store

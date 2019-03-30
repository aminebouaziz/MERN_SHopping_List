import { creatStore,applyMiddleware,compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer/index'

const initialState  ={}

const middleware =[thunk]

const  store = createStore( rootReducer, initialState,compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
export default store
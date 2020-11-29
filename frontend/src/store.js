import {createStore ,combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import  {productDetailsReducer, productListReducer}  from './reducers/productReducers'

const initalstate ={}
const reducer =combineReducers({
    productList :productListReducer ,
    productDetails :productDetailsReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer ,initalstate ,composeEnhancer(applyMiddleware(thunk)))
export default store
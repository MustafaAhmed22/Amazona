import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { detailsProduct } from '../actions/productActions';
const ProductScreen = (props) => {
    const productDetails =useSelector(state =>state.productDetails)
    const {product ,loading,error} =productDetails
    const dispatch = useDispatch()
        // console.log(props.match.params.id)
        // const product = data.products.find(x =>x._id === props.match.params.id)
        useEffect(()=>{
            dispatch(detailsProduct(props.match.params.id))
            return()=>{

            }
        },[])
    return (
        <div>
        <div className='back-to-result'>
            <Link to='/'>Back To Home</Link>
        </div>
    {loading ?<div>LOADING...</div> 
    :error? <div>{error}</div>:(
         <div className='details'>
         <div className='details-image'>
             <img src={product.image} alt='product'></img>
 
         </div>
         <div className='detials-info'>
             <ul>
             <li>
                 <h4>{product.name}</h4>
                 </li>
                 <li>
                     {product.rating} stars ({product.numreviews} reviews) 
                 </li>
                 <li>
                price: ${product.price}
                 </li>
                 <li>
                     Description :
                     <div>
                         {product.description}
                     </div>
                 </li>
               
             </ul>
         </div>
         <div className='details-action'>
             <ul>
                 <li>
                 price :{product.price}
                 </li>
                 <li>
                     status :{product.status}
                 </li>
                 <li>
                     Qty: <select>
                         <option>1</option>
                         <option>2</option>
                         <option>3</option>
                         <option>4</option>
                         <option>5</option>
                     </select>
                 </li>
                 <li>
                     <button className='button primary'>Add To Cart</button>
                 </li>
             </ul>
         </div>
         </div>
    )}
       
        </div>
    )

    
       
     
}
 
export default ProductScreen;
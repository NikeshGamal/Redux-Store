import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';


const Cart = () => {
   //useDispatch
   const dispatch = useDispatch();
  
  //using useSelector hook
  //to get the access of the cart and the product inside it
  const product = useSelector(state=>state.cart);

  //handleRemove eventHandler
  const handleRemove = productID=>{
      dispatch(remove(productID));
  }
  return (
        <div className="container">
             {
               product.map(product=>{
                  return <div className="container d-flex align-items-center my-4 py-4" style={{margin:"auto"}} key={product.id}>
                       <img src={product.image} alt="product" style={{height:"100px",margin:"0 5.5em"}}/>
                       <h5 className='mx-4'>{product.title}</h5>
                       <h5 className='mx-4 text-center text-danger'>${product.price}</h5>
                       {/* We need to only pass the id value as we filter the product of the cart that we have according to the  id and that having id will not be displayed in the cart section  */}
                       <button onClick={()=>{handleRemove(product.id)}} className="btn btn-primary btn-sm mx-4">Remove</button>
                  </div> 
               })
             }
        </div>

  )
}

export default Cart
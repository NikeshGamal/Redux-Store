import React from 'react'
import { useEffect,useState } from 'react'
import { useDispatch} from 'react-redux';
import { add } from '../store/cartSlice';

const Products = () => {
   //useDispatch hook
   const dispatch = useDispatch();

    //useState Hook
    const [products , setProducts] = useState([]);

    useEffect(() => {
        //fetching the products through hitting API
        const getProducts = async()=>{
         console.log("Loading...");
        const response = await fetch('https://fakestoreapi.com/products', {mode:'cors'});
        const data = await response.json();
        console.log(data);
        console.log("loaded");
        setProducts(data);
   }

      getProducts();
    }, [])
   
    //we make a eventhandler where we pass the argumnet i.e. a product that we clicked into 
    const handleAdd = (product)=>{
         //Now here we have to dispatch the action 
         //i.e. we need to get and update the state that we can only do by dispatching the action for that we use a hook called useDispatch hook
         dispatch(add(product));

    }

  return (
        <div className="d-flex justify-content-around row">
            {products.map(product=>{
                return <div className="col-md-3" key={product.id} style={{margin:"2em 0px"}}>
                     <div className="container d-flex flex-column justify-content-center" style={{height:"325px"}}>
                    <img className='my-3' src={product.image} alt="product" style={{height:"46%",margin:"auto"}}/>
                    <h5 className='text-center my-1'>{product.title}</h5>
                    <h5 className='text-danger text-center'>$   {product.price}</h5>
                    {/* we are passing the value in the handleAdd as we are dispatching the action from handleAdd eventHandler so we needed the arrow function in the onClick eventListener */}
                    <button onClick={()=>{handleAdd(product)}} className="btn btn-primary btn-sm">Add to cart</button>
                </div>
                </div>
            })}
        </div>
  )
}

export default Products
import React from 'react'
import { useEffect,useState } from 'react'

const Products = () => {
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

  return (
        <div className="d-flex justify-content-around row">
            {products.map(product=>{
                return <div className="col-md-3" key={product.id} style={{margin:"2em 0px"}}>
                     <div className="container d-flex flex-column justify-content-center" style={{height:"325px"}}>
                    <img className='my-3' src={product.image} alt="product" style={{height:"46%",margin:"auto"}}/>
                    <h5 className='text-center my-1'>{product.title}</h5>
                    <h5 className='text-danger text-center'>$   {product.price}</h5>
                    <button className="btn btn-primary btn-sm">Add to cart</button>
                </div>
                </div>
            })}
        </div>
  )
}

export default Products
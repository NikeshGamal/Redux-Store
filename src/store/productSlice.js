import {createSlice} from '@reduxjs/toolkit'
//we need to create a slice that will help to decompose the our store data 
//it helps us to manage the data easy 
//it reduces the complexity of the data

//Object.freeze doesnot allow you to change the value of the key --> it is read only
export const STATUSES = Object.freeze({
    IDLE:"idle",
    ERROR: "error",
    LOADING: "loading"
});

const productSlice = createSlice({
   name:'product',
   initialState:{
       data:[],
       status:STATUSES.IDLE
   },
   reducers:{
       setProducts(state,action){
           //DO not do asynchronous call from reducer because reducer is synchronous and pure function
           //so for that we use middleware i.e.thunks
           state.data=action.payload;
       },
       setStatus(state,action){
        state.status=action.payload;
    }
   }});

   //In createSlice method it automatically gives us the actions and reducers of the slice we need not to define explicitly ---->in core redux we needed to make the action payload but in redux toolkit we need not to make we can get is from createSlice() method
   export const {setProducts,setStatus} = productSlice.actions;

   //we are exporting the reducers of the cartSlice
   export default productSlice.reducer;


   //Thunks///////////////////////////////
   //is a middleware that is used to hit the API call and receive the respond then dispatch the reducer automatically so we need not to manually call the dispatching in latest i.e. redux toolkit thunk but in normal redux we need to call 

   export const  fetchProducts = ()=>{
      return  async function fetchProductThunk(dispatch,getState){
          //API call is in pending state
         dispatch(setStatus(STATUSES.LOADING));
        try {
            const response = await fetch('https://fakestoreapi.com/products', {mode:'cors'});
            const data = await response.json();
            
            dispatch(setProducts(data));
        //API call is in fulfill state
         dispatch(setStatus(STATUSES.IDLE));
        } catch (error) {
            console.log(error);
            //API call is in fulfill state
            dispatch(setStatus(STATUSES.ERROR));
        }

      }
   }
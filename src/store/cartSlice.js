import {createSlice} from '@reduxjs/toolkit'
//we need to create a slice that will help to decompose the our store data 
//it helps us to manage the data easy 
//it reduces the complexity of the data
let initialState =[];
const cartSlice = createSlice({
   name:'cart',
   initialState,
   reducers:{
        add(state,action){
            //For the action.payload the data will be send to the method as an argumnet while dispatching the action that will be the product that we clicked or added to cart
            state.push(action.payload);
            //one main thing to be clear that we can't mutate the state directly for that we need to do as
            //return [...state,action.payload]
            //But because we are using createSlice it allows us to mutate the state directly and it does the change by making the state and updating it internally so we need not to make it explicitly

            //inside redux toolkit we cant directly mutate state as it allowed by createSlice 
            //but in case of core redux we need to return the new state we can't mutate the original state
            // return [...state,action.payload]
        },
        remove(state,action){
             return state.filter(item=>item.id !== action.payload);
        }
   }});

   //In createSlice method it automatically gives us the actions and reducers of the slice we need not to define explicitly ---->in core redux we needed to make the action payload but in redux toolkit we need not to make we can get is from createSlice() method
   export const {add,remove} = cartSlice.actions;

   //we are exporting the reducers of the cartSlice
   export default cartSlice.reducer;

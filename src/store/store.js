//Store is the central repository where our state is present and we update , change the state
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";

const store = configureStore({
    reducer : {
        //since we are importing the cartSlice.reducer as cartReducer we are using cartReducer here
        //otherwise it would have been cart:carSlice.reducer if we have import cartSlice and exported cartSlice it is because we need to pass or give root reducers
        cart : cartReducer,
        product: productReducer
    }
})

export default store;
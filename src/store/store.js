import { configureStore } from '@reduxjs/toolkit' ;
import userReducer from '../slice/userSlice';
import productReducer from '../slice/productSlice'; 
import sellReducer from '../slice/sellSlice'; 
import buyReducer from "../slice/buySlice"; 
import orderReducer from '../slice/vendorOrderSlice';

export const store=configureStore({  
    reducer:{  
        user:userReducer , 
        product:productReducer, 
        sell:sellReducer, 
        buy:buyReducer, 
        order:orderReducer,
        
    }

}) 

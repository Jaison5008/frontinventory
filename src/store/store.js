import { configureStore } from '@reduxjs/toolkit' ;
import userReducer from '../slice/userSlice';
import productReducer from '../slice/productSlice'; 
import sellReducer from '../slice/sellSlice'; 
import buyReducer from "../slice/buySlice"; 


export const store=configureStore({  
    reducer:{  
        user:userReducer , 
        product:productReducer, 
        sell:sellReducer, 
        buy:buyReducer, 
        
        
    }

}) 

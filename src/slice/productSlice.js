import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";   

import axios from 'axios' ;
//import { token } from "../../../back/common/bcrypt";
//const url= 'http://localhost:8000';  
const url='https://inventoryback-qp23.onrender.com'
export const getProductThunk= createAsyncThunk('get/productThunk',async(_,{rejectWithValue})=>{

    try{  
       const response= await axios.get(`${url}/get`); 
       
       
       return response.data
       }catch(error){  
       return rejectWithValue({error:error.response.data.error})
    } }
   ) 
   export const addProductThunk = createAsyncThunk('post/productThunk',async(ss,{rejectWithValue})=>{

    try{  
       const response= await axios.post(`${url}/post`,ss); 
       
       
       return response.data
       }catch(error){  
       return rejectWithValue({error:error.response.data.error})
    } }
   ) 

   export const editProductThunk= createAsyncThunk('edit/productThunk',async(ss,{rejectWithValue})=>{
   
    try{  
       const response= await axios.put(`${url}/edit`,ss); 
       
      console.log(response)
       return response.data
       }catch(error){  
       return rejectWithValue({error:error.response.data.error})
    } }
   )  
   export const editBuyProductThunk= createAsyncThunk('editBuy/productThunk',async(ss,{rejectWithValue})=>{
   
    try{  
       const response= await axios.put(`${url}/editbuy`,ss); 
       
      console.log(response)
       return response.data
       }catch(error){  
       return rejectWithValue({error:error.response.data.error})
    } }
   )  

const initialState={  
    getProductList:[], 
    getDangerList:[], 
    getExcessList:[], 
    getNillList:[],
    dangerCount:'',  
    excessCount:'', 
    nillCount:'', 
    productCount:'' ,
    isErorr:'', 
    isLoading:true,
     post:'',

}


const productSlice=createSlice({  
    name:'product',
    initialState,

reducers:{    
    empty:(state)=>{ 
        state.getProductList=[]
    }
   
   
}, extraReducers:(builder)=>{
    builder

.addCase(getProductThunk.pending,(state,action)=>{ 
    state.isLoading=true; 
    
})
.addCase(getProductThunk.fulfilled,(state,action)=>{  
    
    state.isLoading=false;
    state.getProductList=action.payload.products;
   state.getDangerList=action.payload.danger;
   state.getExcessList=action.payload.Excess;
    state.getNillList=action.payload.stock;
   state.dangerCount=action.payload.dan; 
    state.excessCount=action.payload.Exc; 
   state.nillCount=action.payload.sto;
   state.productCount=action.payload.Pro;
    state.isErorr=''
})
.addCase(getProductThunk.rejected,(state,action)=>{   
    
    state.isLoading=false;
    state.getProductList=[];
   state.getDangerList=[];
   state.getExcessList=[];
    state.getNillList=[];
   state.dangerCount=0;  
    state.excessCount=0;
   state.nillCount=0;
   state.productCount=0;
  state.isErorr=action.payload.error
}) 
}
})  
export const {empty}=productSlice.actions
export default productSlice.reducer;
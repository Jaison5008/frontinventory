import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";   

import axios from 'axios' ;
//import { token } from "../../../back/common/bcrypt";
//const url= 'http://localhost:8000';  
const url='https://inventoryback-qp23.onrender.com'
export const getBuyThunk= createAsyncThunk('get/buyThunk',async(_,{rejectWithValue})=>{

    try{  
       const response= await axios.get(`${url}/buy/get`); 
       
       
       return response.data
       }catch(error){  
       return rejectWithValue({error:error.response.data.error})
    } }
   ) 
   export const BuypostThunk= createAsyncThunk('post/BuyThunk',async(value,{rejectWithValue})=>{
    console.log(value)
   try{  
      const response= await axios.post(`${url}/buy/post`,value); 
      console.log(response.data)
      
      return response.data
      }catch(error){  
      return rejectWithValue({error:error.response.data.error})
   } }
  ) 

const initialState={  
   buyadd:[],
    isErorr:'', 
    isLoading:true ,
    buyall:[],


}


const buySlice=createSlice({  
    name:'buy',
    initialState,

reducers:{    addBuy:(state,action)=>{  
        
    state.buyadd.push(action.payload) 
      
       },  
       remov:(state,action)=>{ 
           state.buyadd=state.buyadd.filter((item)=>item._id!==action.payload)
       } , 
       edit:(state,action)=>{ 
         console.log(action.payload) 
         state.buyadd=state.buyadd.map((item)=>item._id!==action.payload.id ?{...item,Qty:action.payload.Qty}:{...item})
         
       },
    deletes:(state)=>{ 
        state.buyadd=[]
    }
   
}, extraReducers:(builder)=>{
    builder

.addCase(getBuyThunk.pending,(state,action)=>{ 
    state.isLoading=true; 
    state.buyall=[];
})
.addCase(getBuyThunk.fulfilled,(state,action)=>{  
    
    state.isLoading=false;
    state.buyall=action.payload;
    state.isErorr='';
})
.addCase(getBuyThunk.rejected,(state,action)=>{   
    
    state.isLoading=false;
    state.buyall=[];
  state.isErorr=action.payload.error;
}) 
}
})  
export const {addBuy,remov,edit,deletes}=buySlice.actions
export default buySlice.reducer;
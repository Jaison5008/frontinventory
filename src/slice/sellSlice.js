import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";   

import axios from 'axios' ;
//import { token } from "../../../back/common/bcrypt";
//const url= 'http://localhost:8000';  
const url='https://inventoryback-qp23.onrender.com'
export const getSellThunk= createAsyncThunk('get/sellThunk',async(_,{rejectWithValue})=>{

    try{  
       const response= await axios.get(`${url}/sold/get`); 
       console.log(response.data)
       
       return response.data
       }catch(error){  
       return rejectWithValue({error:error.response.data.error})
    } }
   )  
   export const SellpostThunk= createAsyncThunk('post/sellThunk',async(value,{rejectWithValue})=>{
     console.log(value)
    try{  
       const response= await axios.post(`${url}/sold/post`,value); 
       console.log(response.data)
       
       return response.data
       }catch(error){  
       return rejectWithValue({error:error.response.data.error})
    } }
   ) 


const initialState={   
    
   data:[], 
   selladd:[],  
   sellall:[],
   
    isErorr:'', 
    isLoading:true


}


const sellSlice=createSlice({  
    name:'sell',
    initialState,

reducers:{    
    addSell:(state,action)=>{  
        
 state.selladd.push(action.payload) 
   
    },  
    remove:(state,action)=>{ 
        state.selladd=state.selladd.filter((item)=>item._id!==action.payload)
    } , 
    edit:(state,action)=>{ 
      console.log(action.payload) 
      state.selladd=state.selladd.map((item)=>item._id!==action.payload.id ?{...item,Qty:action.payload.Qty}:{...item})
      
    }, 
    delet:(state)=>{ 
        state.selladd=[]
    }

   
 

}, extraReducers:(builder)=>{
    builder

.addCase(getSellThunk.pending,(state,action)=>{ 
    state.isLoading=true; 
    
})
.addCase(getSellThunk.fulfilled,(state,action)=>{   
    state.sellall=action.payload.sa
console.log(action.payload.sa)
    if(action.payload.sa.length>4){
    state.data=action.payload.sa.slice((action.payload.sa.length - 4), action.payload.sa.length) 
    console.log(state.data)
    }else{ 
       state.data=action.payload.sa
       console.log(state.data)
    }
    state.isLoading=false;
    
    state.isErorr=''
})
.addCase(getSellThunk.rejected,(state,action)=>{   
    
    state.isLoading=false;
    state.sellall=[];
  state.isErorr=action.payload.error
}) 
}
})  
export const {addSell,remove,edit,delet}=sellSlice.actions
export default sellSlice.reducer;
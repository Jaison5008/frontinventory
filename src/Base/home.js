import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card'; 

 import { getProductThunk } from '../slice/productSlice';
 import {useDispatch, useSelector} from 'react-redux';  
import Bars from '../componentc/Bar'; 
import Lines from '../componentc/Line';
 import { getSellThunk } from '../slice/sellSlice';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
 
function TextExample() {    

  const dispatch=useDispatch() 
  const navi=useNavigate()
  const {dangerCount,
    excessCount,
   nillCount,
   productCount}=useSelector(state=>state.product)   
   const {data}=useSelector(state=>state.sell)
   const date=data.map((it)=>it._id.day+"/" +it._id.month+"/" +it._id.year)  
   console.log(date)
   const total=data.map(it=>it.totalAmount) 
   const counts=data.map(it=>it.count)
   console.log(total)
useEffect(()=>{ 
  dispatch(getProductThunk()) 
  dispatch(getSellThunk())
},[]) 

 
  console.log(dangerCount,
    excessCount,
   nillCount,
   productCount) 

  return (<div className='base'> 
  
    <Card style={{height:'6rem', width: '18rem',color:"black",border: '2px solid black',boxShadow: '8px 8px #888888'}}>
      <Card.Body style={{display:'flex',flexDirection:"column",justifyContent:'center',alignItems:"center"}}> 
        Total products<br/>
       <h1>{productCount}</h1>
      </Card.Body>
    </Card>   
    <Button variant='dark' onClick={()=>navi('/listproduct')}>
    <Card style={{height:'6rem', width: '18rem',color:"black",border: '2px solid black',boxShadow: '8px 8px #888888' }}>
      <Card.Body style={{display:'flex',flexDirection:"column",justifyContent:'center',alignItems:"center"}}> 
         Excess stock<br/>
       <h1>{excessCount}</h1> 
      </Card.Body>
    </Card>      
    </Button>
    <Button variant='dark' onClick={()=>navi('/listproduct')}>
    <Card style={{height:'6rem', width: '18rem',color:"black",border: '2px solid black',boxShadow: '8px 8px #888888' }}>
      <Card.Body style={{display:'flex',flexDirection:"column",justifyContent:'center',alignItems:"center"}}> 
        Low stock<br/>
       <h1>{dangerCount}</h1>
      </Card.Body>
    </Card>    
     </Button>
    <Button variant='dark' onClick={()=>navi('/listproduct')}>
    <Card style={{height:'6rem', width: '18rem',color:"black" ,border: '2px solid black',boxShadow: '8px 8px #888888'}}>
      <Card.Body style={{display:'flex',flexDirection:"column",justifyContent:'center',alignItems:"center"}}> 
        Nill stock <br/>
       <h1>{nillCount}</h1>
      </Card.Body>
    </Card>    
     </Button>
    <Card style={{height:'12rem', width: '21rem',color:"black",border: '2px solid black',boxShadow: '8px 8px #888888' }}>
      <Card.Body style={{display:'flex',flexDirection:"column",justifyContent:'center',alignItems:"center"}}> 
        
       <Bars dates={date} total={total} ></Bars>
      </Card.Body >
    </Card>  
    <Card style={{height:'12rem', width: '21rem',color:"black",border: '2px solid black',boxShadow: '8px 8px #888888' }}> 
    
      <Card.Body > 
      <Lines dates={date}  counts={counts}></Lines>
       
      </Card.Body>
    </Card>  
   
    </div>
    
  );
}

export default TextExample;
  

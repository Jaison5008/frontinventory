import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'   
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form' 
import Button from 'react-bootstrap/esm/Button'
import { useSelector,useDispatch } from 'react-redux' 
import{getProductThunk,editProductThunk,editBuyProductThunk,empty} from '../slice/productSlice'  
import { addSell,edit ,SellpostThunk,remove,delet} from '../slice/sellSlice'  
import{ addBuy,edits,BuypostThunk,remov,deletes} from '../slice/buySlice'

import '../App.css'
//import { Form } from 'react-router-dom'
 function BuyAdding ()  {   
  const dispatch=useDispatch()
 const {getProductList}= useSelector(state=>state.product)   
  const {selladd}=useSelector(state=>state.sell)  
  const {buyadd}=useSelector(state=>state.buy)
  const[itemss,setItem]=useState([])   
  const [search,setSearch]=useState('')
const [buyItem,setBuyitem]=useState([])
  console.log(buyItem)
  const [submit, setSubmitting]=useState([]) 
  
   const [submitBuy,setSubmittingBuy]=useState([])
  
  
  const [id,setId]=useState({}) 
  
   useEffect(()=>{  
    const ss=async()=>{
    
    await setBuyitem(buyadd) 
  
      
    } 
    ss()
   },[buyadd])   
   useEffect(()=>{  
    const ss=async()=>{
    await setItem(selladd)   
    
      
    } 
    ss()
   },[selladd])  

   useEffect(()=>{  
    const ss=async()=>{
   const ss=await  dispatch(edit(id))  
   console.log(ss)
    } 
    ss() 
   
    
   },[])  
   const con=async(item)=>{ 
   const ss=await dispatch(SellpostThunk(item))  
  const payload=ss.payload.ms 
  console.log(payload)
    const mm= await dispatch(editProductThunk(payload))
   if(mm){ 
    await dispatch(getProductThunk())  
    await  dispatch(deletes()) 
    //await dispatch(empty())
    setItem([]) 
    setSubmitting([]) 
    setId({}) 
   
   }

    
   }
   const conbuy=async(item)=>{ 
    const ss=await dispatch(BuypostThunk(item))  
   const payload=ss.payload.ms 
   console.log(payload)
     const mm= await dispatch(editBuyProductThunk(payload))
    if(mm){ 
      await dispatch(getProductThunk())  
      await dispatch(delet()) 
      //await dispatch(empty())
      setBuyitem([]) 
      setSubmittingBuy([]) 
      setId({}) 
    
    }
     
    }
 
 useEffect(()=>{ 
  const ss=async()=>{  
    
   await dispatch(getProductThunk())
  } 
  return ()=>ss()
 },[])
 const selling=async(item)=>{    

  const ss=selladd.filter((items)=>items._id===item._id) 
  if(ss.length===0){ 
    
 const mm=await dispatch(addSell({_id:item._id,productname:item.productname, productcode:item.productcode,productMrp:item.productMrp,Qty:1,amount:item.productMrp}))
 
  }
 } 
 const buy=async(item)=>{    
  const ss=buyadd.filter((items)=>items._id===item._id) 
  if(ss.length===0){ 
  await dispatch(addBuy({_id:item._id,productname:item.productname, productcode:item.productcode,productMrp:item.productMrp,Qty:1,amount:item.productMrp})) 

  }

 }  
const ss=async(a,b)=>{  

await setId({Qty:a,id:b})

  const s=(itemss.map((i)=>i._id===id.id?{...i,Qty:id.Qty}:{...i})) 
 await setItem(s)
 
}  


const ssBuy=async(a,b)=>{  

  await setId({Qty:a,id:b})
  
    const s=(buyItem.map((i)=>i._id===id.id?{...i,Qty:id.Qty}:{...i})) 
   await setBuyitem(s)
   
  } 
const submiting=()=>{ 
  setSubmitting(itemss) 
  dispatch(delet())
} 
const submitingBuy=()=>{ 
  setSubmittingBuy(buyItem) 
dispatch(deletes())
}
 const removing=async(e)=>{  
  const s=(itemss.filter((i)=>i._id!==e))  
 await dispatch(remove(e))
   setItem(s)
 } 

 const removingBuy=async(e)=>{ 
  const s=(buyItem.filter((i)=>i._id!==e))   
  await dispatch(remov(e))
  setBuyitem(s)
 } 
return (<section>  

<div className='layouts'>  
 
 <div className='container1'>
 <Form className='sm-col-6'>
      <Form.Group className="sm-col-6" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Search Product" value={search} onChange={(e)=>setSearch(e.target.value)} />
        
      </Form.Group>
 </Form>  


    <div   style={{display:'flex',flexWrap:'wrap', gap:"10px",paddingTop:'5px'}}>  
    {getProductList?getProductList.filter((val)=>{
  if(search===('')){
       return val;
    }
       else if ((val.productname.toLowerCase()).includes(search.toLowerCase())){  
    
      return val;
    }  
  
}) .map((item)=> 
   <Card key={item._id} style={{ display:"flex",gap:'5px', width: '12rem' ,height:'22rem' }}>
       
       <Card.Img style={{height:'5rem'}}variant="top" src="" />
        
       <Card.Body >
        <Card.Title >{item.productname}</Card.Title> 
        <div style={{ display:'flex', flexDirection:"column",gap:'1rem'}}> 
        <Card style={{width: '10rem' ,height:'5rem',displays:"flex",justifyContent:'center',alignItems:'center'}}> 
        <h1 style={{justifyContent:"centre"}}>{item.availableQty}</h1></Card> 
        
        <Button variant="primary"onClick={()=>buy(item)}>Add Buy</Button>
        <Button variant="primary" onClick={()=>selling(item)}>Add sell</Button>
        
        </div>
      </Card.Body> 
    
    </Card>):""}  </div>
    

 
</div>


    <div className='container2'>   
    <Card>
    <Form>  
    {itemss.length>0 ?<>
    <Table striped bordered hover>
      <thead> 
        
        <tr>
          <th>S.No</th>
          <th> Name</th>
          <th>Code</th>
          <th>Qty</th> 
          <th>Mrp</th> 
          <th>Total</th> 
        </tr>
      </thead> 
      {itemss.length>0 ?itemss.map((item,index)=><>
      <tbody>
        <tr>
          <td>{index+1}</td>
          <td>{item.productname}</td>
          <td>{item.productcode}</td>
         
      
       <td> <input type='string' placeholder={1} onChange={(e)=>ss(e.target.value,item._id)} /></td> 
       <td>{item.productMrp}</td>  
      <td>{item.Qty*item.productMrp}</td>
       

     
     <td><Button onClick={()=>removing(item._id)}>remove</Button> </td> 
     
      </tr> 
      </tbody> </>):""} 
      </Table></>:""}
      {itemss.length>0?
      <Button onClick={submiting}>submit</Button>:''}



      </Form>
 
</Card>

</div>   



<div className='container3'> 
<Card>
    <Form>  
    {submit.length>0 ?<>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.No</th>
          <th> Name</th>
          <th>Code</th>
          <th>Qty</th> 
          <th>Mrp</th> 
          <th>Total</th>
        </tr>
      </thead> 
      {submit.length>0 ?submit.map((item,index)=><>
      <tbody>
        <tr>
          <td>{index+1}</td>
          <td>{item.productname}</td>
          <td>{item.productcode}</td>
          <td>{item.Qty}</td>  
      
      
       <td>{item.productMrp}</td>  
      
       <td> {item.productMrp*item.Qty}</td>

       

     
     
     
      </tr>  
      
      </tbody> </>):""}   
      {submit.length>0 ?<>
      <Button onClick={()=>con(submit)}>submit</Button></>:""}
      </Table></>:''}
      
     


      </Form> 
     
 
</Card>
   
</div>

<div className='container4'>

<Card>
    <Form>  
    {buyItem.length>0 ?<>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.No</th>
          <th> Name</th>
          <th>Code</th>
          <th>Qty</th> 
         
        </tr>
      </thead> 
      {buyItem.length>0 ?buyItem.map((item,index)=><>
      <tbody>
        <tr>
          <td>{index+1}</td>
          <td>{item.productname}</td>
          <td>{item.productcode}</td>
         
      
       <td> <input type='string' placeholder={1} onChange={(e)=>ssBuy(e.target.value,item._id)} /></td> 
      
       

     
     <td><Button onClick={()=>removingBuy(item._id)}>remove</Button> </td> 
     
      </tr> 
      </tbody> </>):""} 
      </Table></>:''}
      {buyItem.length>0?
      <Button onClick={submitingBuy}>submit</Button>:''}



      </Form>
 
</Card> 
</div>  
<div className='container5'> 
<Card>
    <Form>  
    {submitBuy.length>0 ?<>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.No</th>
          <th> Name</th>
          <th>Code</th>
          <th>Qty</th> 
         
        </tr>
      </thead> 
      {submitBuy.length>0 ?submitBuy.map((item,index)=><>
      <tbody>
        <tr>
          <td>{index+1}</td>
          <td>{item.productname}</td>
          <td>{item.productcode}</td>
          <td>{item.Qty}</td>  
         </tr>  
      
      </tbody> </>):""}   

      {submitBuy.length>0 ?<>
      <Button onClick={()=>conbuy(submitBuy)}>submit</Button></>:''}
      </Table></>:''}
      </Form> 
     </Card>
   </div>
</div>
  </section>
    
  )
} 
export default BuyAdding

import React ,{useEffect, useState} from 'react'
import { useDispatch,useSelector} from 'react-redux' 
import {getSellThunk} from '../slice/sellSlice' 
import {getBuyThunk} from '../slice/buySlice' 
import Table from 'react-bootstrap/Table'
const Buylist = () => {  
  const dipatch=useDispatch()
const [day,setDay]=useState([]) 
const [id,setId]=useState([]) 
console.log(id)

//console.log(sell,buy)
useEffect(()=>{ 
const mmm=async()=>{ 
const ss=await dipatch(getSellThunk()) 
const mm=await dipatch(getBuyThunk())  
setDay(ss.payload.sa) 
setId(ss.payload.soldItems)
//console.log(mm)
} 
return ()=>mmm()
},[])
  return ( <div> 
  <div>
    
    <div style={{display:'flex',justifyContent:'center'}}> <h2>  DAY WISE SELL DEATAILSE</h2></div>
      <Table striped bordered hover> 
       <thead>
        <tr >
          <th>#</th>
          <th>DATE</th>
          <th>SALE COUNT</th>
          <th> TOTAL</th>
        </tr>
      </thead>
      <tbody key={.00001}> 
        {day.length>0?day.map((item,index)=><>
        <tr key={index}>
          <td>{index+1}</td>
          <td>{item._id.day} /{item._id.month}/{item._id.year}</td>
          <td>{item.count}</td>
          <td>{item.totalAmount}</td>
        </tr> </>):""}
        </tbody>
    </Table>  
    </div> 
    <div> 
    <div style={{display:'flex',justifyContent:'center'}}> <h2>  ID WISE SELL DEATAILSE</h2></div>
<Table striped bordered hover>
<thead> 

  <tr>
    <th>#</th>
    <th>DATE/Time</th>
    <th>Id</th>
    <th>COUNT</th> 
    <th>TOTAL</th> 
  </tr>
</thead>
<tbody> 
{id?id.map((item,index)=><>
  <tr key={item._id}>
  <th>{index+1}</th>
    <th>{item.createdAt}</th>
    <th>{item._id}</th>
    <th>{item.addproduct.length}</th> 
    <th>{item.total}</th> 
    </tr></>):""}
  </tbody>
</Table> 
</div>

</div>


  ) 
  
}

export default Buylist
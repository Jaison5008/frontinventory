import React, { useEffect } from 'react' 
import { useDispatch,useSelector } from 'react-redux'  
import { getProductThunk } from '../slice/productSlice'; 
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import '../App.css';
import CardBody from 'react-bootstrap/esm/CardBody';
import CardTitle from 'react-bootstrap/esm/CardTitle';
import CardText from 'react-bootstrap/esm/CardText';
function ListProduct() {  
  const dispatch=useDispatch()
const { getDangerList, getExcessList, getNillList}=useSelector((state)=>state.product)
 console.log(getDangerList,getExcessList,getNillList)
useEffect(()=>{ 
const num=async()=>{
await  dispatch(getProductThunk())   
}  
return ()=>num();
},[])
  return ( 
    <div className='pagging'>   
    
    
    <div style={{display:'flex',flexWrap:'wrap', gap:"10px",paddingTop:'5px'}} className='container2'>   
    
    
      
    {getExcessList.map((item)=><>
      <Card key={item._id} style={{ width: '18rem',height:'12rem', backgroundColor:'orange', boxShadow: '8px 8px #888888' }}>
    <Card.Header > Name :{item.productname}</Card.Header>
    <CardBody >
      <CardTitle>Code :{item.productcode}</CardTitle>
      <CardText>Mrp :{item.productMrp}</CardText>
      <CardText>suplier :{item.suplier}</CardText>
    </CardBody>
  </Card></>)}
    </div>
    
    <div  style={{display:'flex',flexWrap:'wrap', gap:"10px",paddingTop:'5px'}} className='container3'>   
    
    {getDangerList.map((item)=><>
      <Card key={item._id} style={{ width: '18rem',height:'12rem', backgroundColor:'yellow',boxShadow: '8px 8px #888888' }}>
    <Card.Header > Name :{item.productname}</Card.Header>
    <CardBody >
      <CardTitle>Code :{item.productcode}</CardTitle>
      <CardText>Mrp :{item.productMrp}</CardText>
      <CardText>suplier :{item.suplier}</CardText>
    </CardBody>
  </Card></>)}
      
      </div >

     <div style={{display:'flex',flexWrap:'wrap', gap:"10px",paddingTop:'5px'}} className='container4'>   
      
      {getNillList.map((item)=><>
    <Card key={item._id} style={{ width: '18rem',height:'12rem', backgroundColor:'red',boxShadow: '8px 8px #888888' }}>
    <Card.Header> Name :{item.productname}</Card.Header>
    <CardBody >
      <CardTitle> Code :{item.productcode}</CardTitle>
      <CardText>Mrp :{item.productMrp}</CardText>
      <CardText>suplier :{item.suplier}</CardText>
    </CardBody>
  </Card></>)}
      
    </div>




    </div>)
  
}

export default ListProduct 

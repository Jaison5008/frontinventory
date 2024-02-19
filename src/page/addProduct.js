import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 

import React,{useState} from 'react';  

import{useDispatch} from "react-redux"  

import { addProductThunk } from '../slice/productSlice';
import "../App.css"
function Add() {  
  
const dispatch=useDispatch()




const[productname,setProductname]=useState('')  
const[productcode,setProductcode]=useState('')
const[manufacturer,setManufacturer]=useState('')
const[suplier,setSuplier]=useState('')
const[suplierEmail,setSuplierEmail]=useState('')
const[productDiscription,setProductDiscription]=useState('')

const[availableQty,setAvailableQty]=useState()
const[productMrp,setProductMrp]=useState()
const[buyingPrice,setBuyingPrice]=useState()
const[catagory,setCatagory]=useState('')


const adding=async()=>{ 

const ss= await  dispatch 
(addProductThunk({productname,productcode,manufacturer,suplier,suplierEmail,productDiscription,
availableQty,productMrp,buyingPrice,catagory})) 
console.log(ss) 
setProductname('');
setProductcode('');
setManufacturer('');
setSuplier('');
setSuplierEmail('');
setProductDiscription('');
setAvailableQty();
setProductMrp();
setBuyingPrice();
setCatagory('');

}
  
  
 
 return ( <div className='box1'>
       <Form  style={{marginLeft:'10px',marginRight:'30px',display:'flex' ,gap:'40px'}}>  
       <div>
       <Form.Group className="mb-3" controlId="productname">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" placeholder="Product Name"  value={productname} onChange={(e)=>setProductname(e.target.value)} />
         </Form.Group>

      <Form.Group className="mb-3" controlId="productcode">
        <Form.Label>Product Code</Form.Label>
        <Form.Control type="text" placeholder="Product Code"  value={productcode} onChange={(e)=>setProductcode(e.target.value)}/>
      </Form.Group> 

      <Form.Group className="mb-3" controlId="manufacturer">
        <Form.Label>manufacturer</Form.Label>
        <Form.Control type="text" placeholder="manufacturer"  value={manufacturer} onChange={(e)=>setManufacturer(e.target.value)} />
         </Form.Group> 

         <Form.Group className="mb-3" controlId="suplier">
        <Form.Label>suplier</Form.Label>
        <Form.Control type="text" placeholder="suplier"  value={suplier} onChange={(e)=>setSuplier(e.target.value)} />
         </Form.Group> 

         <Form.Group className="mb-3" controlId="suplierEmail">
        <Form.Label>suplierEmail</Form.Label>
        <Form.Control type="text" placeholder="suplierEmail"  value={suplierEmail} onChange={(e)=>setSuplierEmail(e.target.value)} />
         </Form.Group> 
         <Form.Group className="mb-3" controlId="productDiscription">
        <Form.Label>productDiscription</Form.Label>
        <Form.Control type="text" placeholder="productDiscription"  value={productDiscription} onChange={(e)=>setProductDiscription(e.target.value)} />
         </Form.Group>  
         </div> 
         <div>
         <Form.Group className="mb-3" controlId="availableQty">
        <Form.Label>availableQty</Form.Label>
        <Form.Control type="Number" placeholder="availableQty"  value={availableQty} onChange={(e)=>setAvailableQty(e.target.value)} />
         </Form.Group> 
         <Form.Group className="mb-3" controlId="productMrp">
        <Form.Label>productMrp</Form.Label>
        <Form.Control type="Number" placeholder="productMrp"  value={productMrp} onChange={(e)=>setProductMrp(e.target.value)} />
         </Form.Group> 
         <Form.Group className="mb-3" controlId="buyingPrice">
        <Form.Label>buyingPrice</Form.Label>
        <Form.Control type="Number" placeholder="buyingPrice"  value={buyingPrice} onChange={(e)=>setBuyingPrice(e.target.value)} />
         </Form.Group> 
         <Form.Group className="mb-3" controlId="catagory">
        <Form.Label>catagory</Form.Label>
        <Form.Control type="text" placeholder="catagory"  value={catagory} onChange={(e)=>setCatagory(e.target.value)} />
         </Form.Group> 
        
      
      <Button variant="primary" onClick={adding}>
        Submit
      </Button> </div>
    </Form>
  
  
  </div>
  
  );
}

export default Add; 

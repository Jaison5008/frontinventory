import React, { useEffect,useState } from 'react'
import { useDispatch} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import { getUserThunkbyid} from '../slice/userSlice'
const Userprofile = () => {   
  
  const dispatch=useDispatch()
  const[Detail, setDetail]=useState({})
  //console.log(user) 
  useEffect(()=>{ 
    const ss=async()=>{  
    const sss= await dispatch(getUserThunkbyid())  
   setDetail(sss.payload.user)
    
    } 
    return()=>ss()
  },[])
  return (<div className='box' >
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src='' />
      <Card.Body>
        <Card.Title>{Detail.email}</Card.Title>
        <Card.Text>
         {Detail.name}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></div> )
}

export default Userprofile 



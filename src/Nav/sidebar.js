import { useEffect, useState } from 'react';
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'; 
import Offcanvas from 'react-bootstrap/Offcanvas';

//import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function OffcanvasExample() {   
  
    
    const [action,setAction]=useState(true);   
    const [nick,setNick]=useState('profile')
    const navi=useNavigate()   
    const {login}=useSelector(state=>state.user)  
    
    useEffect(()=>{ 
    if(login==='LOGIN SUCESS'){  
     const nick=JSON.parse(localStorage.getItem('nick')) 
     setNick(nick)
       setAction(false)
    }
    },[login])
    const loginaction=()=>{ 
       navi('/login')
    }
    const logoutaction=()=>{ 
        setAction(true)   
        navi('/') 
        localStorage.clear(); 
        window.location.reload();
        }  
        const signup=()=>{ 
            navi('/signup')
            }  
            const Home=()=>{ 
              navi('/')
            } 
            const profile=()=>{ 
              navi('/get')
            } 
            const main=()=>{ 
              navi('/product')
            } 
            const add=()=>{ 
              navi('/addproduct')
            }  
            const buysell=()=>{ 
              navi('/sellbuy')
            }
        
  return (
    <div >
      {[false,].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg" style={{display:'flex',justifyContent:'space-between'  }} >
          
          <Container fluid >  

            <Container style={{display:'flex',justifyContent:'space-between'}}>  
            <div> 
            <Navbar.Brand href="#"> Inventry</Navbar.Brand>
            
            </div>
            
            
            
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}
             style={{marginLeft:'5px'}} />
             
          
          
          </Container> 
          
            
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Inventry
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body> 
                
                <Nav className="justify-content-end flex-grow-1 pe-3">  
                {action?<> 
                  <Nav.Link onClick={Home}>Home</Nav.Link>  
                <Nav.Link onClick={loginaction}>Login</Nav.Link> 
                <Nav.Link onClick={signup}>signup</Nav.Link>
                  </> 
                :<>
                  <Nav.Link onClick={logoutaction}>Logout</Nav.Link> 
                  <Nav.Link onClick={Home}>Home</Nav.Link>  
                  <Nav.Link onClick={main}>Sell/Buy</Nav.Link>  
                  <Nav.Link onClick={add}>AddProduct</Nav.Link>  
                  <Nav.Link onClick={buysell}>Sell list</Nav.Link> 
                  <Nav.Link onClick={profile} >{nick?<h6 style={{color:'blueviolet'}} key={1}>{nick}</h6>:"profile"}</Nav.Link></>}
                  
                   
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default OffcanvasExample;
import React from "react"; 
import{ BrowserRouter,Routes,Route} from 'react-router-dom';
import Adduser from '../src/Login/adduser' ;
import Base from "../src/Base/home"
import Login from "../src/Login/login"; 
import Signup from '../src/Login/signup'; 
import Navbar from '../src/Nav/sidebar' 
import Forget from '../src/Login/forgetpassword' 
import Reset from "../src/Login/resetpassword";  
import Product from "../src/Buy/buyAdding";
import ListProduct from "../src/page/listproduct"; 
import AddProduct from '../src/page/addProduct'; 
import Sellbuylist from '../src/page/buyinglist' ;
import Userlist from '../src/page/userlist';
function App() {
  return (<BrowserRouter>
<Navbar/>
<Routes> 
<Route exact path='/' element={<Base/>}/>
<Route exact path='/adduser' element={<Adduser/>}/>
<Route exact path='/login' element={<Login/>}/> 

<Route exact path='/signup' element={<Signup/>}/>   
 
<Route exact path='/forget' element={<Forget/>}/> 
<Route exact path='/:_id/:token' element={<Reset/>}/>   
<Route exact path='/product' element={<Product/>}/>
<Route exact path='/listproduct' element={<ListProduct/>}/> 
<Route exact path='/addproduct' element={<AddProduct/>}/> 
<Route exact path='/sellbuy' element={<Sellbuylist/>}/>  
<Route exact path='/get' element={<Userlist/>}/> 
 {/* <Route exact path='/signup' element={<Signup/>}/> <Route exact path='/viewanswer' element={<Answer/>}/>  */}
</Routes>


</BrowserRouter> 
    
  );
}

export default App;

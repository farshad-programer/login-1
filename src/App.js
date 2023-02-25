// import "bootstrap/dist/css/bootstrap.min.css";
// // import './App.scss';
import "./App.css";
// import Product from "./component/product/Product";

import AppNavbar from "./component/navbar/Navbar";
import Product from "./component/product/Product";
import { Route,Routes,Navigate}from 'react-router-dom'
import OneProduct from "./component/product/oneProduct";
import Login from "./component/stor/login";
import Stor from "./component/stor/stor";

function App() {
  return (
    <>
    <AppNavbar/>
   <Routes>
    <Route path='/home' element={ <Navigate replace to='/Products'/>}/>

    
    
    <Route path='/Products' element={ <Product/>}/>
    <Route path='/stor' element={ <Stor/>}/>
    <Route path='/login' element={ <Login/>}/>
    <Route path='/products/:_id' element={ <OneProduct/>}/>
   


    

</Routes>
    </>
  );
}

export default App;

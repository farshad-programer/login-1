import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './App.css';
import App from './App';
import AppNavbar from './component/navbar/Navbar';
import {BrowserRouter as Router }from 'react-router-dom'
import  Navbar  from './component/navbar/Navbar';
import Product from './component/product/Product';
import OneProduct from './component/product/oneProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    
    <Router>

<App/>


    </Router>
 
);



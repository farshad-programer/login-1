import "../../App.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";

import { Button ,Row,Card } from "react-bootstrap";


const OneProduct = () => {
 

  const [product, setproduct] = useState({});
  
const {_id}= useParams();
  
  
    useEffect ( () => {
      axios.get(`http://localhost:5000/api/auth/product/${_id}`)
  .then(function (response) {
    setproduct(response.data.data);
    console.log(product);
  })
  .catch(function (error) {
    
    console.log(error);
  })
  .finally(function () {
    console.log('alless sher gut')
  });
      
      
      
    
    
       
       
            
},[]);
const navigate = useNavigate();
    // --------------------------
    return ( <>
     <div className="mt-3  text-center ">
    <Button onClick= {()=>{navigate('/Products',{replace:true}) ;}}   variant="success" className="" >Navigate user</Button>

    </div>
    
    <Card className=" m-auto  mt-5 " style={{ width: '18rem' }}>
    <Card.Img variant="top" className="img-p h-img " src={product.avatar} />
    <Card.Body>
     
     <Card.Title>{product.name}</Card.Title>
      <Card.Text>
        price : {product.price}.00$
        
        
      </Card.Text>
     
      <Row className=" justify-content-between">
       <Button onClick={()=>{}}  variant="info" className="col col-4 ms-2" >replace</Button>
          
          
              
      <Button  variant="info"className="col col-4 me-2 ">push</Button>
      
      </Row>
    </Card.Body>
  </Card></> );
}
 
export default OneProduct;
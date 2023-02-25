import Card from "react-bootstrap/Card";
import { useParams,NavLink } from "react-router-dom";


// import "./product.scss";
import "../../App.css";
import "../navbar/navbar.css";
import axios from "axios";
import { useState ,useEffect,useReducer  } from "react";
import LoadingProduct from "../skeleton/loadingProduct";
import { Button ,Row, } from "react-bootstrap";



const Product = () => {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  
    useEffect ( () => {
       axios.get('http://localhost:5000/api/auth/product')
      .then(function (response) {
        setproducts(response.data.data);
      setloading(false) ;
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log('alles nicht gut')
      });
      

    

    
    
      
       
       
            
},[]);

       
// ----------------------------------- 
  
  return (
    <>
    <div className="row m-2 p-2"></div>
    <div className="m-4 p-2"> </div>
   <div className=" container-fluid text-center">
   <div className="row   justify-content-center "><div  className=" col-1 ">
   <Button onClick={handelCreat} variant="outline-danger ">create</Button>
    
    
    
    </div></div>
   </div>
   

      <div className="row  justify-content-evenly">
        
      {loading ? (<LoadingProduct/>):( products.map(product=>(<div key={product._id} className=" col-md-6 col-lg-4 col-sm-12 p-4  ">
    
    <Card className=" m-auto " style={{ width: '18rem' }}>
      <Card.Img variant="top" className="img-p h-img " src={product.avatar} />
      <Card.Body>
       <NavLink to={`/products/${product._id}`}>
       <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          price : {product.price}.00$
          
          
        </Card.Text>
       </NavLink>
        <Row className=" justify-content-between">
         <Button onClick={handelUpdate} variant="info" className="col col-4 ms-2" >update</Button>
            
            
                
        <Button onClick={handelDelet} variant="info"className="col col-4 me-2 ">delet</Button>
        
        </Row>
      </Card.Body>
    </Card>
    </div>)))}
   
    </div>
    
    
    </>
  );
  function handelDelet(product){
    console.log('delet')
  }
  function handelCreat(){
    console.log('creat')
}
function handelUpdate(product){
    console.log('update')
}
};

export default Product;
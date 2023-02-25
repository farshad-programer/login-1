import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import {Card,Row, } from "react-bootstrap";

const LoadingProduct = () => {
    return Array(6).fill({}).map(()=>{
        return(
            <div className="col-md-6 col-lg-4 col-sm-12 p-4  ">
                
                <Card className=" m-auto " style={{ width: '18rem' }}>
     
      <Skeleton variant="top" baseColor="#f9f2e5" highlightColor="#e5ecf9" className="img-p max-img-height ms-2 "width={268} height={150} count={1} />
      <Skeleton variant="top" baseColor="#f9f2e5" highlightColor="#e5ecf9" className="img-p max-img-height mx-2 w-25" height={24} count={1} />
      <Skeleton variant="top" baseColor="#f9f2e5" highlightColor="#e5ecf9" className="img-p max-img-height mx-2 w-50" height={24} count={1} />
      <Card.Body>
        
        <div className=" justify-content-between">
        
         <Skeleton baseColor="#f9f2e5" highlightColor="#e5ecf9" className="col col-4 ms-2 w-50"   count={1} />  
         <Skeleton baseColor="#f9f2e5" highlightColor="#e5ecf9" className="col col-4 me-2 w-50"   count={1} />  
            
                
       
        
        </div>
      </Card.Body>
    </Card>


            </div>
        )
    })
     
}
 
export default LoadingProduct;
// (product=>(<div key={product.id} className=" col-md-6 col-lg-4 col-sm-12 p-4  ">
    

   
//     </div>))
    {/* <Skeleton baseColor="#f9f2e5" highlightColor="#e5ecf9" className="mb-2"   height={100}count={1} />
<div className="row justify-content-around"  >
<div className="col-4 ms-4 ms-lg-3"><Skeleton baseColor="#f9f2e5" highlightColor="#e5ecf9" className="" height={40}  count={1} /></div>
<div className="col-4 me-4 me-lg-3"><Skeleton baseColor="#f9f2e5" highlightColor="#e5ecf9" className=""  height={40}  count={1} /></div>




</div> */}
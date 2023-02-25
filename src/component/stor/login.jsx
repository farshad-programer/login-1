import axios from 'axios';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login= () => {
    function handelSubmit(e) {
    e.preventDefault() ;
      const accunt = {email:email.current.value,password:password.current.value} 
      
      if (accunt.email && accunt.password) {
        axios.post('http://localhost:5000/api/auth/login',accunt)
        .then(function (response) {
      console.log(response)
          
        })
        .catch(function (response) {
      console.log(response);
          
        })
        .finally(function () {
         
        });
        
      }  
    }
   const email=useRef();
   const password=useRef();
    return ( <>
   <div className="m-5">
   <Form onSubmit={handelSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" ref={email} placeholder="Enter email" />
        <Form.Text className="text-muted text-center d-block">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" ref={password} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
      </Form.Group>
      <div className="text-center">
      <Button variant="danger" type="submit" className="px-4 mt-3">
        Login
      </Button>
      </div>
      
    </Form>

   </div>
    </>);
}
 
export default Login ;

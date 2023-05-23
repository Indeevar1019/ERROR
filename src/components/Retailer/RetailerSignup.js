import React, { Fragment,useRef,useState } from 'react';
import {Form,Button,Card,Alert,Container} from 'react-bootstrap';
// import { useUserAuth } from '../../contexts/UserAuthContext';

import {Link,useNavigate} from 'react-router-dom';

import { UserAuth } from '../../contexts/AuthContext';
import { AuthContextProvider } from '../../contexts/AuthContext';


//import { useAuth } from '../../contexts/AuthContext';
function RetailerSignUP(){
    //const emailRef=useRef();
    //const passwordRef=useRef();
    //const passwordConfirmRef=useRef();
    //const { signUp }=useUserAuth();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const [error,setError]=useState('');
    const [isacc,setisacc]=useState(false);

    const {createUser}=UserAuth();
    const navigate=useNavigate();

    const GotoRetailerPage=(event)=>{
        navigate('/retailerhome');
    }

    //const navigate=useNavigate();

    async function HandleSubmit(event){
        event.preventDefault();
        setError("");
        
        console.log(email,password);
        try{
            await createUser(email,password);
            setisacc(true);
        }catch(err){
            setError(err.message);
            console.log(err.message);

        }
        //signup(emailRef.current.value,passwordRef.current.value);
    }
    return(
        
        <Fragment>       
            <Card>
            <Card.Body>
            <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
        <div className="w-100" style={{maxWidth:"400px"}}>
      
                <div>
                {!isacc && (<><h2 className="text-center mb-4">Sign Up</h2>
    <p>{error && <Alert variant="danger">{error}</Alert>}</p>
    <div>
    <Form onSubmit={HandleSubmit}>
        <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" onChange={(event)=>setEmail(event.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={(event)=>setPassword(event.target.value)}></Form.Control>
        </Form.Group>
        <Button type="submit" className="w-100 text-center mt-2">Sign Up</Button>
        </Form>
        </div></>)}
     </div>
                <div>
                    {isacc && (<p><button onClick={GotoRetailerPage}>ClickMe</button></p>)}
                </div>
    </div>
            </Container>
            </Card.Body>
            </Card>
        <div className="w-100 text-center mt-2">
            Already have an account?Log In?
        </div>
        </Fragment>
 
    );
 }

 export default RetailerSignUP;

//  ref={emailRef}
//ref={passwordRef}
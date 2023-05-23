import React,{useRef,Fragment,useState,useEffect} from 'react';
import classes from './Retailer.module.css';
import { useNavigate,Link } from 'react-router-dom';
import Retailer from './Retailer';
import { UserAuth } from '../../contexts/AuthContext';
import {Form,Button,Card,Container} from 'react-bootstrap';
//import {Form,Card,Button} from 'react-bootstrap';

const RetailerLogin=()=>{
    const [login,setLogin]=useState(true);
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const [error,setError]=useState('');
    const navigate=useNavigate();
    const emailRef=useRef();
    //const password=useRef();

    const {signIn}=UserAuth();
    const {forgetPassword}=UserAuth();

    const gotosignup=(event)=>{
        event.preventDefault();
        navigate('/retailersignup');

    }
    // let loaded=[];
    // useEffect(()=>{
    //     const fetchdata=async()=>{
    //       const response=await fetch('https://fir-6f6fb-default-rtdb.firebaseio.com/Retailer.json').then();
    //       if(!response.ok){
    //         throw new Error('Something went wrong!');
    
    //       }
    //       const responseData=await response.json();
    //       for(const key in responseData){
    //         loaded.push({
    //           id:key,
    //           name:responseData[key].Username,
    //           password:responseData[key].password,
    //         });
    //       }
    //     };
    //     fetchdata();
    //   },[]);
    // let disp=<p></p>;
    // let display=false;
    // const loaded=[];
    // const submitHandler= async ()=>{
    //     const em=username.current.value;
    //     const pass=password.current.value;
    //         const response= await fetch("https://fir-6f6fb-default-rtdb.firebaseio.com/Retailer.json").then();
    //         const responseData= await response.json();
    //         for(const key in responseData){
    //           loaded.push({
    //             id:key,
    //             name:responseData[key].Username,
    //             pass:responseData[key].password
    //           });
    //         }
    //     };
    //     console.log(loaded);
        
        const submitHandler= async (event)=>{
            event.preventDefault();
            setError('');
            try{
                await signIn(email,password);
                navigate('/retailerhome');

            }catch(err){
                setError(err.message);
                console.log(err.message);
            }

            //console.log(loaded);
        };


        const forgetPasswordhandler=()=>{
            const e=emailRef.current.value;
            if(e){
                forgetPassword(e).then(()=>(emailRef.current.value=""));
            }

        };



        const RetailerLogin=(<React.Fragment>
            <Card>
                <Card.Body>
                <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
                <div className="w-100" style={{maxWidth:"400px"}}>
                    <h3>Login</h3>
            <Form onSubmit={submitHandler}>
            <Form.Label>UserName</Form.Label>
            <Form.Control type="text" onChange={(event)=>setEmail(event.target.value)} ref={emailRef}></Form.Control>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={(event)=>setPassword(event.target.value)} ></Form.Control>
            <Button type="submit" className="w-100 text-center mt-2">Submit</Button>
            <br></br>
            <div>
                <br></br>
            <Button type="button" onClick={gotosignup}>NewUser?</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;<Button type="button" onClick={forgetPasswordhandler}>ForgetPassword?</Button>
            
            </div>
            </Form>
            </div>
            </Container>
            </Card.Body>
        </Card>
        </React.Fragment>)


    return(<React.Fragment>
        {login && RetailerLogin}
        <Link to="/"><button>Cancel</button></Link>
    </React.Fragment>
    );

};

export default RetailerLogin;


// ref={username}
//ref={password}
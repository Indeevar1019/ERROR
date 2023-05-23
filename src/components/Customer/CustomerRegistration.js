import React,{useState,useRef} from 'react';
import classes from './CustomerRegistration.module.css';
import Card from '../UI/Card';
import { useNavigate,Link } from 'react-router-dom';
//import Button from '../UI/Button';

// const onregisterhandler=(event)=>{

// };

const CustomerRegistration=()=>{

    const navigate=useNavigate(); 

    const CustomerName=useRef();
    const number=useRef();
    const email=useRef();
    const username=useRef();
    const password=useRef();
    const cfpassword=useRef();


    const onSubmitHandler=(userData)=>{
        const cname=CustomerName.current.value;
        const no=number.current.value;
        const em=email.current.value;
        const pass=password.current.value;
        setData(true);
            fetch("https://fir-6f6fb-default-rtdb.firebaseio.com/CustomerRegistration.json",{
            method:'POST',
            body:JSON.stringify({
                CustomerName:cname,
                Mobile:no,
                Email:em,
                Password:pass,
            })
        });
        setData(false);
    };


    const customerSignUp=(<React.Fragment><Card><div className={classes.control}>
        <form onSubmit={onSubmitHandler} autoComplete='off'>
            <label>Customer Name</label>
            <input type="text" ref={CustomerName}></input>
            <label>Contact Number</label>
            <input type="tel" ref={number}></input>
            <label>E-mail</label>
            <input type="email"ref={email}></input>
            <label>UserName</label>
            <input type="text" ref={username}></input>
            <label>Password</label>
            <input type="password" ref={password}></input>
            <label>Confirm Password</label>
            <input type="password" ref={cfpassword}></input>
            <button type="submit">Register</button>
            </form></div></Card></React.Fragment>);

    const [data,setData]=useState(true);



    const onCancelHandler=(event)=>{
        setData(false);
        navigate('/');
    };
 

    return(
        <React.Fragment>
            {data && customerSignUp}
            <button onClick={onCancelHandler}>Cancel</button>
            </React.Fragment>
       );

};

//onClick={onregisterhandler}

export default CustomerRegistration;
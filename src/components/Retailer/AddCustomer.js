import React from 'react';
import {useState,useRef} from 'react';
import classes from './CustomerRegistration.module.css';
import Card from '../UI/Card';
import { useNavigate,Link } from 'react-router-dom';

const AddCustomer=()=>{


    const navigate=useNavigate(); 

    const username=useRef();
    const amount=useRef();

    const onSubmitHandler=(userData)=>{
        const cname=username.current.value;
        const no=amount.current.value;
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
            <label>UserName</label>
            <input type="text" ref={username}></input>
            <label>Amount</label>
            <input type="number" ref={cfamount}></input>
            <button type="submit">Register</button>
            </form></div></Card></React.Fragment>);

    const [data,setData]=useState(true);



    const onCancelHandler=(event)=>{
        setData(false);
        navigate('/retailerhome');
    };
 

    return(
        <React.Fragment>
            {data && customerSignUp}
            <button onClick={onCancelHandler}>Cancel</button>
            </React.Fragment>
       );

};

export default AddCustomer;

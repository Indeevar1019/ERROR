import React,{useState} from 'react';
import classes from './CustomerRegistration.module.css';
import CustomerRegistration from './CustomerRegistration';

import { useNavigate,Link } from 'react-router-dom';

const CustomerLogin=()=>{
    const[addCustomer,setaddCustomer]=useState(false);
    const navigate=useNavigate();
    const newuserHandler=()=>{
        navigate('/customerregistration');
        setaddCustomer(true);
    };

    return(<div className={classes.control}>
        <form>
        <label>UserName</label>
        <input type="text"></input>
        <label>Password</label>
        <input type="password"></input>
        <Link to="/"><button>Cancel</button></Link>
        <button onClick={newuserHandler}>NewUser?</button>
        {/* {addCustomer && <CustomerRegistration/>} */}
        </form>
    </div>);

};

export default CustomerLogin;
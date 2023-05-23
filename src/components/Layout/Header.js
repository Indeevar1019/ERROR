import React,{Fragment,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import mealsImage from '../../assests/1330708.jpg';
import classes from './Header.module.css';
import CustomerRegistration from '../Customer/CustomerRegistration';
import Card from '../UI/Card';
import RetailerLogin from '../Retailer/RetailerLogin';



const Header=(props)=>{
    const navigate=useNavigate();
    const[customer,setCustomer]=useState(false);
    const[retailer,setRetailer]=useState(false);
    const retaillogin=(event)=>{
        navigate('/retailer');
        setRetailer(true);
    };
    const customerlogin=(event)=>{
        navigate('/customer');
        setCustomer(true);
    }
    return(<Fragment>
        <header className={classes.header}>
            <h1>Retailer & Web</h1>
           <button onClick={retaillogin}>Retailer Login</button>
            {retailer && <RetailerLogin></RetailerLogin>}
            <button onClick={customerlogin}>Customer Login</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='An Image'/>
        </div>
    </Fragment>);
};
export default Header;
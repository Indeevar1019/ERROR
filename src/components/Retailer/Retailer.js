import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
import { Fragment,useState } from "react";

import RetailerDashBoard from "./RetailerDashBoard";
const Retailer=(props)=>{
    const navigate=useNavigate();
    const {user,logout}=UserAuth();
    const handlelogout=async ()=>{
        try{
            await logout();
            console.log('You are logged out');
            navigate('/');
        }
        catch(err){
            console.log(err.message);
        }
       

    }
    const id=user.uid;
    const loaded=[];
    const viewDashboard=async (event) => {
        //event.preventDefault();
        try {
          const response = await fetch('https://auth-development-8bea4-default-rtdb.firebaseio.com/RetailerDB.json');
          if (!response.ok) {
            throw new Error('Something went wrong!');
          }
    
          const data = await response.json();
         
          for(const key in data){
            if(key===id)
            loaded.push({
              id:key,
              title:data[key].Users
            })
          }
        } catch (error) {
          console.log(error.message);
        }
        //console.log(loaded);
      const arg=loaded[0];
      console.log(arg.title);
    }

    const addDatatoDashboard=()=>{
        navigate("/crud");

    };












    return(
        <Fragment>
        <div>   <h2>
        This is Reatiler Page!.
        Welcome{user && user.email}
        
    </h2>
    <h3>TotalAmount {user.uid}</h3>
    <button onClick={viewDashboard}>MyDashBoard</button>
    <button onClick={addDatatoDashboard}>AddUser</button>
    <button onClick={handlelogout}>Logout</button></div>
    </Fragment>
);

};

export default Retailer;
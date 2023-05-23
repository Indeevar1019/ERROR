import React from 'react';
import StartFirebase from '../../firebaseindex';
import {ref,set,get,update,remove,child} from "firebase/database";

export class Crud extends React.Component{
    constructor(props){
        super(props);
        this.state={
            key:'',
            Username:'',
            amount:''
        }
        this.interface=this.interface.bind(this);
    }
    componentDidMount(){
        this.setState({
            db:StartFirebase()
        });
    }
    render(){
        return(
            <>
            <label>UserName</label>
            <input type='text' id='userbox' value={this.state.Username} onChange={e=>{this.setState({Username:e.target.value})}}/>

            <label>Amount</label>
            <input type='number' id='amount' value={this.state.amount} onChange={e=>{this.setState({amount:e.target.value})}}/>

            <button id="addBtn">AddData</button>
            <button id="updateBtn">UpdateData</button>
            <button id="deleteBtn">Delete Data</button>
            <button id="selectBtn">GetDatafromDB</button>

            </>
        )
    }
    interface(event){
        const id=event.target.id;
        if(id=='addBtn')
        {
            this.insertData();
        }
        else if(id=='updateBtn')
        {
            this.updateData();
        }
        else if(id=='deleteBtn')
        {
            this.deleteData();
        }
        else if(id=='selectBtn')
        {
            this.selectData();
        }
    }
    getAllInputs(){
        return {
            Username:this.state.Username,
            amount:this.state.amount
        }
    }
    insertData(){
        const db=this.state.db;
        const data=this.getAllInputs();
        set(ref(db,'Retail/'+data.Username),{
            username:data.Username,
            amount:data.amount,
        });
        console.log(data.Username,data.amount);

    }


}
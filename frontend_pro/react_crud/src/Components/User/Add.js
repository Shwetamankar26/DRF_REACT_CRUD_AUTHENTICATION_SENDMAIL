import React from 'react'
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function Add() {
    const {register,handleSubmit} = useForm();
    const navigate = useNavigate();
    function SaveData(data){
        axios.post('http://127.0.0.1:8000/app1/product/',data)
        navigate('/User/show')
    }
  return (
    <>
    <div className='container'>
   <center><h1 style={{color:'red'}}><i>PRODUCT PLACED FORM</i></h1></center>
   <form onSubmit={handleSubmit(SaveData)}>
    <label htmlFor='c_nm'>ENTER CUSTOMER NAME</label>
    <input type='text' id='c_nm' className='form-control' {...register('cust_nm')}/>
    <br/>
    <br/>
    <label htmlFor='p_nm'>ENTER PRODUCT NAME</label>
    <input type='text' id='p_nm' className='form-control' {...register('prod_nm')}/>
    <br/>
    <br/>
    <label htmlFor='c_add'>ENTER CUSTOMER ADDRESS</label>
    <input type='text' id='c_add' className='form-control' {...register('cust_addr')}/>
    <br/>
    <br/>
    <label htmlFor='u_mail'>ENTER USER-EMAIL</label>
    <input type='email' id='u_mail' name='user_email' className='form-control' {...register('user_email')}/>
    <br/>
    <br/>

    
    <center><input type='submit' value='ADD-PRODUCT' className='btn btn-outline-success col-3 me-3'/>
    <input type='reset' value='RESET-PRODUCT' className='btn btn-outline-warning col-3'/></center>
   </form>
   </div>
        </>
  )
}

export default Add;
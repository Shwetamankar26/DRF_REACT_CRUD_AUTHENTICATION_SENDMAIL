import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
    const {userid} = useParams();
    const {register,handleSubmit,setValue} = useForm();
    const navigate = useNavigate();
    async function Fetchproduct(){
        const result = await axios.get(`http://127.0.0.1:8000/app1/product/${userid}`);
        setValue('cust_nm', result.data.cust_nm);
        setValue('prod_nm', result.data.prod_nm);
        setValue('cust_addr', result.data.cust_addr);
    }

    function SaveData(data){
        axios.put(`http://127.0.0.1:8000/app1/product/${userid}/`,data);
        navigate('/User/show');
    }
    useEffect(()=>{
        Fetchproduct();
    },[]);
  return (
    <>
     <div className='container'>
   <center><h1 style={{color:'red'}}><i>PRODUCT UPDATATION FORM</i></h1></center>
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
    <input type='email' id='u_mail' className='form-control' {...register('user_email')}/>
    <br/>
    <br/>
    <center><button type='submit'  className='btn btn-outline-success col-3 me-3'>UPDATE-PRODUCT</button>
    <button type='reset'  className='btn btn-outline-warning col-3'>RESET</button></center>
   </form>
   </div>
        </>
  )
}

export default Update;
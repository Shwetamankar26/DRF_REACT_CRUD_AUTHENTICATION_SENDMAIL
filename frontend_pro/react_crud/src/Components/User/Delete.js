import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';

function Delete() {
    const {userid}= useParams();
    const [users,setusers] = useState({});
    const navigate = useNavigate();
    async function Fetchproduct(){
        const result = await axios.get(`http://127.0.0.1:8000/app1/product/${userid}`);
        setusers(result.data)
        
    }

    function DeleteData(data){
        axios.delete(`http://127.0.0.1:8000/app1/product/${userid}/`,data);
        navigate('/User/show');
    }
    useEffect(()=>{
        Fetchproduct();
    },[]);
  return (
    <>
    <div className='container'>
   <center><h1 style={{color:'red'}}><i>PRODUCT PLACED FORM</i></h1>
   <form onSubmit={()=>DeleteData()}>
   <h2><i>Do you really want to delete <span>{users.cust_nm}</span>&nbsp;Records?</i></h2>
   <button type='submit'  className='btn btn-outline-danger col-3 me-3'>YES</button>
   <NavLink to='/User/show'><button type='submit'  className='btn btn-outline-success col-3'>NO</button></NavLink>
    </form>
    </center>
    </div>
        </>
  )
}

export default Delete;
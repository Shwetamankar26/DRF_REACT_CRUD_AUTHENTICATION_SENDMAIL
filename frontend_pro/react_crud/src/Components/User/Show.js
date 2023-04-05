import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function Show() {
    const [users,setusers] = useState([]);
    async function Fetchallproduct(){
        const result = await axios.get('http://127.0.0.1:8000/app1/product/')
        setusers(result.data)
    }
    useEffect(()=>{
        Fetchallproduct();
    },[]);
  return (
    <>
    <center><h1 style={{color:'red'}}><i>PRODUCT SHOW FORM</i></h1></center>
    <table className='table table-dark'>
        <thead>
            <tr>
                <th>CUSTOMER NAME</th>
                <th>PRODUCT NAME</th>
                <th>CUSTOMER ADDRESS</th>
                <th>USER-EMAIL</th>
                <th>ACTIONS</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(obj=>{
                    return(
                        <tr>
                            <td>{obj.cust_nm}</td>
                            <td>{obj.prod_nm}</td>
                            <td>{obj.cust_addr}</td>
                            <td>{obj.user_email}</td>
                            <td>
                                <NavLink to={`/User/update/${obj.id}`}><button className='btn btn-outline-warning me-3'>Update</button></NavLink>
                                <NavLink to={`/User/delete/${obj.id}`}><button className='btn btn-outline-danger'>Delete</button></NavLink>
                                </td>
                        </tr>
                    )
                })

            }
        </tbody>

    </table>
        </>
  )
}

export default Show;
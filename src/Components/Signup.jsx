import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nav from './Nav'

const Signup = () => {

    const[data,setData]=useState(

        {
            
            "name":"",
            "email":"",
            "phone":"",
            "password":"",
            "cpass":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value},[])
    }
    
    const readValue=()=>{
        
        if(data.password==data.cpass){
            alert("Password  matches")
            console.log(data)
        axios.post("http://localhost:8080/Signup",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successfully registered")
                    sessionStorage.setItem("token",response.data.token)
                    sessionStorage.setItem("userid",response.data.userid)
                    navigate("/")
                } else {
                    alert("Can't be registered")
                }
            }
        ).catch(
            (error)=>{
                console.log(error)
            })
        }else{
            alert("Can't be added")
        }
    }
    
    let navigate=useNavigate()


  return (
  
    <div>
        <br></br>
        <center><h2>Thillenkeri Siva Temple Online Services</h2></center>
        <br></br>
        
        <br></br>
        <h1><center>REGISTER HERE</center></h1>
        <br></br>
        <br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                    <div className="col col-12 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className='form-label'>Name</label>
                            <input type="text" className='form-control' name='name' value={data.name}  onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className='form-label'>Email id</label>
                            <input type="text" className='form-control' name='email' value={data.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className='form-label'>Phone</label>
                        <input type="text" className='form-control' name='phone'  value={data.phone} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className='form-label'>Password</label>
                        <input type="password" className='form-control' name='password' value={data.password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className='form-label'>Confirm Password</label>
                        <input type="password" className='form-control' name='cpass' value={data.cpass} onChange={inputHandler}/>
                        </div>
                        <br></br>
                        <div className="col col-12 col-sm-12 col-md-12">
                        <button className="btn btn-success" onClick={readValue}>Register</button>
                        <Link class="nav-link" to="/">login</Link>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const [data,setData]=useState
    (
        {
            
            "email":"",
            "password":""
        }
    )
    
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/Signin",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("successfully loginned")
                }
                else{
                    alert("error")
                }
            }
        )
    }


  return (
    <div>
        <br></br>
        <h1><center>Login here</center></h1>
        <br></br>
        <br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className='form-label'>Email id</label>
                            <input type="text" className='form-control' name='email' value={data.email} onChange={inputHandler}/>
                        </div>
                        
                        <div className="col col-12 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className='form-label'>Password</label>
                        <input type="password" className='form-control' name='password' value={data.password} onChange={inputHandler}/>
                        </div>
                        
                        <br></br>
                        <div className="col col-12 col-sm-12 col-md-12">
                        <button className="btn btn-success" onClick={readValue}>Login</button>
                        <Link class="nav-link" to="/Signup">register</Link>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
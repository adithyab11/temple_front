import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const AddPooja = () => {
    
    const[data,setData]=useState(

        {
            
            "vazipadname":"",
            "price":""
            
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value},[])
    }
    
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/addpooja",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successfully registered")
                    
                } else {
                    alert("Can't be registered")
                }
            }
        )
        }

  return (
    <div>
        <Nav/>

<br></br>
        <center><h2>Thillenkeri Siva Temple Online Services</h2></center>
        <br></br>
        <Nav/>
        <br></br>
        <h1><center>Poojas Booking</center></h1>
        <br></br>
        <br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                    <div className="col col-12 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className='form-label'>Vazhipad Name</label>
                            <input type="text" className='form-control' name='vazipadname' value={data.vazipadname}  onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className='form-label'>Price</label>
                            <input type="text" className='form-control' name='price' value={data.price} onChange={inputHandler}/>
                        </div>
                        
                        
                        
                        <br></br>
                        <div className="col col-12 col-sm-12 col-md-12">
                        <button className="btn btn-success" onClick={readValue}>Register</button>
                        <Link class="nav-link" to="/">Submit</Link>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>

    </div>

  )
}

export default AddPooja
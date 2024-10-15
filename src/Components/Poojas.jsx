import React from 'react'

const Poojas = () => {
  return (
    <div>
    <h1 align="center"><u>Pooja Booking</u></h1><br></br><br></br>
    <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler} />
                        </div>
        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" value={data.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Gender</label>
                            <select className="form-control" name="gender" value={data.gender} onChange={inputHandler}>
                                <option value="-Select-">-Select-</option>
                                <option value="Male+">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Mobile No</label>
                            <input type="text" className="form-control" name="phone" value={data.phone} onChange={inputHandler}/>
                        </div>
                        
                       <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" value={data.password} onChange={inputHandler}/>
                        </div>
                      <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" name="cpass" value={data.cpass} onChange={inputHandler}/>
                        </div>
                        
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                        <center><button className="btn btn-primary" onClick={readValue}>Register</button></center>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <center><Link to='/'>Already have an account?</Link></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
  )
}

export default Poojas
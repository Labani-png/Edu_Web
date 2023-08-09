import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Forgetpassword = () => {

  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("")
  const navigate = useNavigate()


  const submitAction = async(e)=>{
    e.preventDefault();
    try{
      const result = await axios.post(`https://ecom23-i2q2.onrender.com/api/auth/forgot-password`,
       { email, answer, newPassword });
    
    if(result && result.data.success){
      toast.success(result.data && result.data.message)
      navigate("/login");

    }else{
      toast.error(result.data.message)
    }
  }
  catch(error){
    // console.log(error);
    toast.error("Something went wrong")

  }

  }

  return (
    <>
     <br />
     <br />
        <div className="container regis_form">
          <form onSubmit={submitAction}>
            <h4>Forget Password</h4>


            <div className="form-group">

              <input type="email"
                className="form-control"
                name='email'
                value={email}
                placeholder=" Enter Your Email Id"
                onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="form-group">

              <input type="text"
                className="form-control"
                name='answer'
                value={answer}
                placeholder=" Enter Your Answer"
                onChange={(e) => setAnswer(e.target.value)} />
            </div>

            <div className="form-group">

              <input type="password"
                className="form-control"
                name='password'
                value={newPassword}
                placeholder=" Set Your New Password"
                onChange={(e) => setNewPassword(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary">Login</button>

                {/* foreget password link........... */}
           <Link style={{color:'#ff2929'}} to='/forgetpassword'> Forget Password</Link>
          </form>

        </div>
        <br />
        <br />
     
    </>
  )
}

export default Forgetpassword
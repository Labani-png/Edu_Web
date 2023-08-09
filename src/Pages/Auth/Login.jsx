import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Contex/Auth';
import axios from 'axios';
import { toast } from 'react-toastify';



const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [auth, setAuth] = useAuth()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`https://ecom23-i2q2.onrender.com/api/auth/login`, {
        email,
        password,
      });
      if (res && res.data.success) {
        toast(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        console.log(res);
        navigate('/')
        localStorage.setItem('auth', JSON.stringify(res.data));
      } else {
        toast.error(res.data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  return (
    <>
      {/* <Layout> */}
      <div className="conntainer" >
        <section style={{ marginTop: "70px" }}>
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                  <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p className="lead fw-normal mb-0 me-3"><h2>Login</h2> </p>
                  </div>
                  <br></br>
                  {/* Email input */}
                  <div className="form-outline mb-1">

                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="form3Example3" className="form-control form-control-lg" placeholder="Enter Your Email" />
                    <label className="form-label" htmlFor="form3Example3"></label>
                  </div>
                  {/* Password input */}
                  <div className="form-outline mb-2">
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
                    <label className="form-label" htmlFor="form3Example4"></label>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    {/* Checkbox */}
                    <div className="form-check mb-0">
                      <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3" />
                      <label className="form-check-label" htmlFor="form2Example3">
                        Remember me
                      </label>
                    </div>
                    <Link to={"/forgetPassword"} className="text-body">Forgot password?</Link>
                  </div>
                  {loading ? <><div className="text-center text-lg-start mt-4 pt-1">
                    <button
                      class="btn btn-primary btn-md"
                      type="button"
                      disabled
                      style={{
                        paddingLeft: "2.5rem",
                        paddingRight: "2.5rem",
                      }}
                    >
                      <span
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Loading...
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to={"/register"} className="link-danger">Register</Link></p>
                  </div>

                  </> : <>

                    <div className="text-center text-lg-start mt-4 pt-1">
                      <button onClick={handleSubmit} type="button" className="btn btn-primary btn-md" style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>Login</button>
                      <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to={"/register"} className="link-danger">Register</Link></p>
                    </div></>}

                </form>
              </div>
            </div>
          </div>

        </section>
      </div>

      {/* </Layout> */}


    </>
  )
}

export default Login
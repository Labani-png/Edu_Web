import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "./logo.png";
import { useAuth } from '../Contex/Auth'
import { toast } from 'react-toastify'

const Navbar = () => {
    const [auth, setAuth] = useAuth()
    // console.log(auth.user);

    const logoutAction = () => {
        setAuth({
            ...auth,
            user: null,
            token: ""
        })
        localStorage.removeItem('auth')
        toast.success("LogOut successful")
    }

    const please = () => {
        if (!auth.user)
            toast("Please Register")
    }
    return (
        <>
            <div className="container">
                <header id="header" class="fixed-top">
                    <div class="container d-flex align-items-center">
                        {/* <h1 class="logo me-auto">
                            <a className='Nav_brand' href="index.html">Educare</a></h1> */}
                        <h1 className="logo me-auto">
                            <NavLink to="">
                                <img src={logo}></img>
                            </NavLink>
                        </h1>

                        <nav className="navbar navbar-expand-lg navbar-light">

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <NavLink className="nav-link active" to='/' onClick={please}>Home</NavLink>
                                    <NavLink className="nav-link" to='/course' onClick={please}>Courses</NavLink>
                                    <NavLink className="nav-link" to='/trainer' onClick={please}>Trainer</NavLink>
                                    <NavLink className="nav-link" to='/blog' onClick={please}>Blog</NavLink>
                                    <NavLink className="nav-link" to='/contact' onClick={please}>Contact Us</NavLink>


                                </div>
                            </div>

                        </nav>

                        {

                            !auth.user ? (

                                <>
                                    {/* <NavLink to='/register' className="get-started-btn" >Register</NavLink> */}
                                    <NavLink to='/login' className="get-started-btn">Login</NavLink>

                                </>) : (

                                <>


                                    <div className="dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                            <img style={{ width: '35px', borderRadius: '21px' }} src="assets/img/testimonials/testimonials-2.jpg" alt="..." />

                                        </a>
                                        <div style={{ textAlign: 'center', }} className="dropdown-menu">
                                            <a className="dropdown-item" href="userdetail">{auth.user.name}</a>
                                            <a style={{ color: '#dddddd' }} className="dropdown-item" href="#">{auth.user.email}</a>
                                            <NavLink to='/login' onClick={logoutAction} className="dropdown-item" href="#">
                                                <img style={{ width: '25px' }} src="assets/img/logout1.gif" alt="..." />LogOut

                                            </NavLink>

                                        </div>
                                    </div>

                                </>)
                        }


                    </div>
                </header>
            </div>

        </>
    )
}

export default Navbar
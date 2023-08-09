import { Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Common/Navbar'
import Home from '../Pages/Home'
import Contacts from '../Pages/Contacts'
import Courses from '../Pages/Courses'
import Trainer from '../Pages/Trainer'
import Footer from '../Common/Footer'
import Blog from '../Pages/Blog'
import Registration from '../Pages/Auth/Registration'
import Forgetpassword from '../Pages/Auth/Forgetpassword'
import Login from '../Pages/Auth/Login';
import Userdetails from '../Components/Dashboard/Userdetails';




const PageRouting = () => {

    function AllprivateRoute({ children }) {
        const token = localStorage.getItem('auth') || sessionStorage.getItem('auth')
        return token !== null && token !== undefined ? (
            children
        ) : (
            <Navigate to='/register' />
        )
    }


    // public route.......

    const publicRoute = [

        {
            path: '/register',
            component: < Registration />
        },
        {
            path: '/login',
            component: <Login/>


        },
        {
            path: '/forgetpassword',
            component: <Forgetpassword />


        },
        {
            path:'userdetail',
            component:<Userdetails/>
        }
    ]

    // protect route.......

    const protectRoute = [
        {
            path: '/',
            component: <Home />
        },
        {
            path: '/course',
            component: <Courses />
        },
        {
            path: '/trainer',
            component: <Trainer />
        },        
        {
            path: '/blog',
            component: <Blog />
        },
        {
            path: '/contact',
            component: <Contacts />
        }
    ]



    return (
        <>

            <Navbar />
            <ToastContainer />

            <Routes>
                {
                    publicRoute?.map((item, index) => {
                        return (
                            <>

                                <Route
                                    key={index + 1}
                                    exact
                                    path={item?.path}
                                    element={item?.component}

                                />
                            </>
                        )


                    })

                }

                {
                    protectRoute?.map((item, index) => {
                        return (
                            <>

                                <Route
                                    key={index + 1}
                                    exact
                                    path={item?.path}
                                    element={<AllprivateRoute>{item?.component}</AllprivateRoute>}

                                />
                            </>
                        )


                    })

                }

            </Routes>
            <Footer />



        </>
    )
}

export default PageRouting
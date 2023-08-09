import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { addUser }from '../../Api/Api'


const initialValues = {
  name: '',
  email: '',  
  message: "",
}

const Contactdetails = () => {
  const [user, setUser] = useState(initialValues)
  const [error, setError] = useState({})
  const navigate = useNavigate()


  //for validate form
  const validation = () => {
    let error = {}
    if (!user.name) {
      error.name = "Name is Required"
    }
    if (!user.email) {
      error.email = "Email is Required"
    } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
    ) {
      error.email = "Enter a valid Email"
    }   

    if (!user.message) {
      error.message = "Message is Required"
    }

    return error
  }


  //onChange Validation

  let name, value
  const postUserData = (e) => {
    name = e.target.name
    value = e.target.value

    setUser({ ...user, [name]: value })

    if (name === "name") {
      if (value.length === 0) {
        setError({ ...error, name: "@Name is Required" })
        setUser({ ...user, name: "" })
      } else {
        setError({ ...error, name: "" })
        setUser({ ...user, name: value })
      }
    }

    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "@Email is Required" })
        setUser({ ...user, email: "" })
      } else {
        setError({ ...error, email: "" })
        setUser({ ...user, email: value })
      }
    }

    if (name === "message") {
      if (value.length === 0) {
        setError({ ...error, message: "@Message is Required" })
        setUser({ ...user, message: "" })
      } else {
        setError({ ...error, message: "" })
        setUser({ ...user, message: value })
      }
    }

  }

  const SubmitInfo = async (e) => {
    e.preventDefault()
    let ErrorList = validation()
    setError(ErrorList)
    if (Object.keys(ErrorList).length === 0) {
      await addUser(user)
      navigate('/')
      toast.success('We Will Contact You Shortly')

    }
  }
  return (
    <>
   
      
    

{/* <!-- banner part --> */}
<section className="contact-banner-sec">
  <div className="container">
    <div className="contact-jumbotron">
      <h1 className="contact-display">Contact With Us</h1>
    </div>
    <div className="contact-row">
      <div className="contact-col-lg-6 col-lg-4 col-md-6 d-flex align-items-stretch">
        <div className="first-card">
          <img className="chat-box" src="assets/img/chat.png" alt="box image" />
          <h2 className="my-card-text">Get Support</h2>
          <p className="my-card-para">Have an issue with an order or with a product you purchased from us? Fill out our support form.</p>
          <button type="button" className="btn btn-info">Contact Support</button>
        </div>
      </div>
      <div className="contact-col-lg-6 col-lg-4 col-md-6 d-flex align-items-stretch">
        <div className="second-card">
          <img className="chat-box" src="assets/img/chat.png" alt="box-image" />
          <h2 className="my-card-text">Contact Us</h2>
          <p className="my-card-para">Just want to say hi? We'd love to hear from you. We love our customers and community! </p>
          <button type="button" className="btn btn-info">Send us a Message</button>
        </div>
      </div>
    </div>
  </div>
</section>


{/* <!-- form section --> */}

<section className="form-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-sm-12 col-md-12">
        <h2 className="contact-heading">Contact Us</h2>
        <p className="from-para">Genuine<br />
          123 Rainy Street<br />
          Kolkata, OK 0073129</p>
        <p className="from-para-2"><strong>General Inquiries:</strong> (033) 555-5555</p>
        <p className="from-para-2"><strong>Customer Support:</strong> (033) 555-5556</p>
        <p className="from-para-2"><strong>Mail Id:</strong> genuine@gmail.com</p>
      </div>
      <div className="col-lg-6 col-sm-12 col-md-12">
        <h2 className="from-heading">Contact From</h2>
        <p className="con-form-para">Send us a message and we'll get back to you as soon as we can!</p>
        <div className="from">
        <form onSubmit={SubmitInfo} action="forms/contact.php" method="post" role="form" className="php-email-form" style={{backgroundColor:'rgba(0, 0, 0, 0)'}}>
         
            <label className="label" htmlFor="fullname">Fullname:</label><br />
            <input className="text-box" type="text" name="fname"  /><br />
            
            <label className="label" htmlFor="Email">Email:</label><br />
            <input className="mail-box" type="email" name="emailaddress" /><br />           

            <label className="label" htmlFor="text-message">your message:</label><br />
            <textarea name="name" rows={2} cols={90} defaultValue={""} /><br />
            <input className="sub-button" type="submit" name defaultValue="Submit" />
            
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<div data-aos="fade-up">
              <iframe style={{ border: 0, width: '100%', height: 350 }} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d972.7547852318667!2d88.42710132508307!3d22.57542740554807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1687197621292!5m2!1sen!2sin" frameBorder={0} allowFullScreen />
            </div>


    </>
  )
}

export default Contactdetails


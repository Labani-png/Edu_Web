import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getTrainerDetails } from '../../Api/Api'

const Trainerdetails = () => {
  const [user, setUser] = useState([])

  const getuserData = async () => {    
    const result = await getTrainerDetails()
    setUser(result)

  }

  useEffect(() => {
    getuserData()
  }, [])
  // console.log(user)

  return (
    <>
      <main id="main" data-aos="fade-in">

        <section id="trainers" className="trainers">
          <div className="container" data-aos="fade-up">
            <div className="row" data-aos="zoom-in" data-aos-delay={100}>

              {
                user.data?.map((serial, index) => {
                  return (
                    <>

                      <div  className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="member">
                          <img src={serial.Image_url} className="img-fluid" alt />
                         <h4>{serial.name}</h4>
                         <p style={{textAlign:'justify',padding:'5px 10px'}}>{serial.details}</p>
                          <div className="member-content">                           

                            <div className="social">
                              <a href="https://twitter.com/"><i className="bi bi-twitter" /></a>
                              {/* <a href><i className="bi bi-facebook" /></a> */}
                              <a href="https://github.com/"><i className="bi bi-github"/></a>
                              <a href=""><i className="bi bi-linkedin" /></a>
                              <a href=""></a>
                            </div>
                          </div>
                        </div>
                      </div>

                    </>
                  )
                })



              }
              {/* <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <img src="assets/img/trainers/trainer-1.jpg" className="img-fluid" alt />
                  <div className="member-content">
                    <h4>Walter White</h4>
                    <span>Web Development</span>
                    <p>
                      Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                    </p>
                    <div className="social">
                      <a href><i className="bi bi-twitter" /></a>
                      <a href><i className="bi bi-facebook" /></a>
                      <a href><i className="bi bi-instagram" /></a>
                      <a href><i className="bi bi-linkedin" /></a>
                    </div>
                  </div>
                </div>
              </div> */}




              {/*               
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <img src="assets/img/trainers/trainer-2.jpg" className="img-fluid" alt />
                  <div className="member-content">
                    <h4>Sarah Jhinson</h4>
                    <span>Marketing</span>
                    <p>
                      Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                    </p>
                    <div className="social">
                      <a href><i className="bi bi-twitter" /></a>
                      <a href><i className="bi bi-facebook" /></a>
                      <a href><i className="bi bi-instagram" /></a>
                      <a href><i className="bi bi-linkedin" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <img src="assets/img/trainers/trainer-3.jpg" className="img-fluid" alt />
                  <div className="member-content">
                    <h4>William Anderson</h4>
                    <span>Content</span>
                    <p>
                      Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                    </p>
                    <div className="social">
                      <a href><i className="bi bi-twitter" /></a>
                      <a href><i className="bi bi-facebook" /></a>
                      <a href><i className="bi bi-instagram" /></a>
                      <a href><i className="bi bi-linkedin" /></a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </main>


    </>
  )
}

export default Trainerdetails
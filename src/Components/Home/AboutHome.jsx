import React, { useEffect, useState } from 'react'
import { getAbout } from '../../Api/Api';

const AboutHome = () => {
  const [title, setTitle] = useState([]);

  const getAllData = async () => {
    const response = await getAbout();
    setTitle(response?.data)
  }

  useEffect(() => {
    getAllData()
  }, [])

  console.log(title);

  return (
    <>
      <section  id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className=" col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay={100}>
              <img src="assets/img/about.jpg" className="img-fluid" alt />
            </div>
            <div style={{textAlign:'justify'}} className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              {
                title?.map((item, index) => {
                  return (
                    <>
                      <h1 style={{textAlign:'center',paddingBottom:'17px',fontWeight:'bolder'}}>{item.title}</h1>
                      <p>
                        {item.description}
                      </p>
                      <ul>
                        <li><i className="bi bi-check-circle" /> {item.feature1}</li>
                        <li><i className="bi bi-check-circle" /> {item.feature2}</li>
                        {/* <li><i className="bi bi-check-circle" /> {item.feature3}</li> */}
                      </ul>
                      <p>
                        {item.conclusion}
                      </p>
                    </>
                  )
                })
              }
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default AboutHome



import React, { useEffect, useState } from "react";
import ModalImage from "react-modal-image";
import { domainName } from "../../../apis/serverApi";
import '../css/App.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Text = ({ reff }) => {
  
    const [projects, setprojects] = useState([])
      const getUsers=async()=>{
        const response = await fetch('https://school.umawedsbala.com/projects');
        setprojects(await response.json());
      }    

      useEffect(()=>{
        getUsers();
      })
  

  const options = {
    margin: 30,
    loop:true,
    responsiveClass: true,
    dots: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 2000,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2,
        },
        400: {
            items: 2,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 5,

        }
    },
};
  return (
    <>
      <div style={{overflow:'hidden'}} className="container-fluid" style={{ backgroundColor: '#EFF9EE' }}>
        <div className="section-title text-center">
        <div className="text-center animation" >
          <div className="heading_s1 text-center">
          <h2>Top <span>Student</span></h2>
          </div>
          <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
        </div>
        </div>
        
        <div className="row" >
          <OwlCarousel className="slider-items owl-carousel" {...options}  >

            {projects.map((proj) => (
              <div className="col-3" style={{ width: 'auto', minWidth: '0' }}>
                <div className="our-team" style={{ borderRadius: '40px' }}>
                  <div className="picture ">
                  <ModalImage
                      small={domainName + proj.projectImage}
                      large={domainName + proj.projectImage}
                      alt={proj.title}
                    />
                  </div>
                  <div className="team-content">
                    <h4 className="name">{proj.title}</h4>
                  </div>
                  <ul className="social">
                    <div className="team-content">
                      <h5 className="name">{proj.description}</h5>
                    </div>
                  </ul>
                </div>
              </div>

            ))}

          </OwlCarousel>

        </div>

      </div>

    </>
  )
}

export default Text

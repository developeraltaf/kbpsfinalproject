import React, { useEffect, useState} from "react";
import { domainName } from "../../../apis/serverApi";
import ModalImage from "react-modal-image";

import { Link } from "react-router-dom";
import '../css/App.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const OurTeachers = () => {

  const [teacher, setteacher] = useState([])
  const getUsers=async()=>{
    const response = await fetch('https://school.umawedsbala.com/teacher');
    setteacher(await response.json());
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
            items: 1,
        },
        400: {
            items: 1,
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

<section className="small_pt">
  <div className="container">	
    <div className="row justify-content-center">

    {teacher.map((proj) => (
      <div className="col-lg-3 col-sm-6">
        <div className="team_box team_style1 box_shadow1 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.01s" style={{animationDelay: '0.01s', opacity: 1}}>
          <div className="team_img">
          <ModalImage style={{width:'375px',height:'250px'}}
                      small={domainName + proj.projectImage}
                      large={domainName + proj.projectImage}
                      alt={proj.title}
                    />
            <ul className="list_none social_icons social_white">
              <li><Link to="#"><i className="ion-social-facebook" /></Link></li>
              <li><Link to="#"><i className="ion-social-twitter" /></Link></li>
              <li><Link to="#"><i className="ion-social-googleplus" /></Link></li>
              <li><Link to="#"><i className="ion-social-instagram-outline" /></Link></li>
            </ul>
          </div>
          <div className="team_title radius_lbrb_10 text-center">
            <h5><Link to="#">{proj.title}</Link></h5>
            <span>Head Of Department</span>
          </div>
        </div>
      </div>
    ))}
     
    </div>
  </div>
</section>

       
</>
    )
}

export default OurTeachers

import React from 'react'
import Footer from '../HomePage/Footer'
import Header from '../HomePage/Header'
import { Link } from "react-router-dom";

import NoticeHeader from '../HomePage/NoticeHeader'
const principal = () => {
    return (
        <>
            <NoticeHeader />
            <Header />

        
            <section  className="page-title-light breadcrumb_section parallax_bg overlay_bg_50" style={{backgroundImage:'url("https://images.pexels.com/photos/1400141/pexels-photo-1400141.jpeg")', backgroundRepeat:'no-repeat',backgroundPosition: 'center',backgroundSize: 'cover',height:'80px', paddingTop:'18px'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="page-title">
                <h1 style={{textAlign:'center',color:'white', fontWeight:'bold',fontsize:'40px'}}>Principal</h1>
              </div>
            </div>
            
          </div>
        </div>
      </section>
  <section>
    <div className="container">	
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="team_single radius_all_10 box_shadow1">
            <div className="team_img">
              <img className="radius_ltrt_10" src="images/about2.jpg"  alt="team_img_big" />
            </div>
            <div className="team_single_info">
              <div className="team_name">
                <h5>Sh. Dilawar Singh</h5>
                <span>Head Of Department</span>
              </div>
              <h6 className="mb-3">Contact info:</h6>
              <ul className="contact_info list_none">
                <li>
                  <span>Address:</span>
                  <address>
RZ- 219, Street no. 18 E, Sadh Nagar Palam, Colony Delhi, India 110045</address>
                </li>
                <li>
                  <span>Email:</span>
                  <Link to="mailto:kanwalbhartischools@gmail.com">kanwalbhartischools@gmail.com</Link>
                </li>
                <li>
                  <span>Phone:</span>
                  <p>+91-9911228484</p>
                </li>
                <li>
                  <span>Social:</span>
                  <ul className="list_none social_icons radius_social">
                    <li><Link to="#" className="sc_facebook"><i className="ion-social-facebook" /></Link></li>
                    <li><Link to="#" className="sc_twitter"><i className="ion-social-twitter" /></Link></li>
                    <li><Link to="#" className="sc_gplus"><i className="ion-social-googleplus" /></Link></li>
                    <li><Link to="#" className="sc_instagram"><i className="ion-social-instagram-outline" /></Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-6">
          <div className="teacher_desc mt-4 mt-md-0">
            <h5 className="mb-3">About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam vero expedita fugiat illo quasi doloremque, in unde omnis sint assumenda! Quaerat in, reprehenderit corporis voluptatum natus sequi reiciendis ullam. Quam eaque dolorum voluptates cupiditate explicabo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div id="accordion-1" className="accordion">
            <div className="card">
              <div className="card-header" id="heading-1-One">
                <h6 className="mb-0"> <Link data-toggle="collapse" to="#collapse-1-One" aria-expanded="true" aria-controls="collapse-1-One" style={{textDecoration:'none'}}>Education</Link> </h6>
              </div>
              <div id="collapse-1-One" className="collapse show" aria-labelledby="heading-1-One">
                <div className="card-body">
                  <p>Latin literature from 45 BC</p>
                  <p>Vivamus bibendum magna</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="heading-1-Two">
                <h6 className="mb-0"> <Link data-toggle="collapse" to="#collapse-1-Two" aria-expanded="true" aria-controls="collapse-1-Two" style={{textDecoration:'none'}}>Professional Experience</Link> </h6>
              </div>
              <div id="collapse-1-Two" className="collapse show" aria-labelledby="heading-1-Two">
                <div className="card-body">
                  <p>10+ Years of Experience</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>



            <Footer />

        </>
    )
}

export default principal

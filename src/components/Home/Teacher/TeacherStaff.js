import React from 'react'
import Footer from '../HomePage/Footer'
import Header from '../HomePage/Header'
import { Link } from "react-router-dom";

import NoticeHeader from '../HomePage/NoticeHeader'
const TeacherStaff = () => {
    return (
        <>
                <NoticeHeader />
            <Header />
           
            <section  className="page-title-light breadcrumb_section parallax_bg overlay_bg_50" style={{backgroundImage:'url("https://images.pexels.com/photos/1400141/pexels-photo-1400141.jpeg")', backgroundRepeat:'no-repeat',backgroundPosition: 'center',backgroundSize: 'cover',height:'80px', paddingTop:'18px'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="page-title">
                <h1 style={{textAlign:'center'}}>Teacher Staff</h1>
              </div>
            </div>
            
          </div>
        </div>
      </section>
  <section className="small_pt">
    <div className="container">	
      <div className="row justify-content-center">
        <div className="col-lg-3 col-sm-6">
          <div className="team_box team_style1 box_shadow1 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.01s" style={{animationDelay: '0.01s', opacity: 1}}>
            <div className="team_img">
              <img src="assets/images/team_img1.jpg" alt="team1" />
              <ul className="list_none social_icons social_white">
                <li><Link to="#"><i className="ion-social-facebook" /></Link></li>
                <li><Link to="#"><i className="ion-social-twitter" /></Link></li>
                <li><Link to="#"><i className="ion-social-googleplus" /></Link></li>
                <li><Link to="#"><i className="ion-social-instagram-outline" /></Link></li>
              </ul>
            </div>
            <div className="team_title radius_lbrb_10 text-center">
              <h5><Link to="#">Aden Smith</Link></h5>
              <span>Head Of Department</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="team_box team_style1 box_shadow1 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.02s" style={{animationDelay: '0.02s', opacity: 1}}>
            <div className="team_img">
              <img src="assets/images/team_img2.jpg" alt="team2" />
              <ul className="list_none social_icons social_white">
                <li><Link to="#"><i className="ion-social-facebook" /></Link></li>
                <li><Link to="#"><i className="ion-social-twitter" /></Link></li>
                <li><Link to="#"><i className="ion-social-googleplus" /></Link></li>
                <li><Link to="#"><i className="ion-social-instagram-outline" /></Link></li>
              </ul>
            </div>
            <div className="team_title radius_lbrb_10 text-center">
              <h5><Link to="#">Kally Brooks</Link></h5>
              <span>Professor</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="team_box team_style1 box_shadow1 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.03s" style={{animationDelay: '0.03s', opacity: 1}}>
            <div className="team_img">
              <img src="assets/images/team_img3.jpg" alt="team3" />
              <ul className="list_none social_icons social_white">
                <li><Link to="#"><i className="ion-social-facebook" /></Link></li>
                <li><Link to="#"><i className="ion-social-twitter" /></Link></li>
                <li><Link to="#"><i className="ion-social-googleplus" /></Link></li>
                <li><Link to="#"><i className="ion-social-instagram-outline" /></Link></li>
              </ul>
            </div>
            <div className="team_title radius_lbrb_10 text-center">
              <h5><Link to="#">David clark</Link></h5>
              <span>Chemistry Teacher</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="team_box team_style1 box_shadow1 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.04s" style={{animationDelay: '0.04s', opacity: 1}}>
            <div className="team_img">
              <img src="assets/images/team_img4.jpg" alt="team4" />
              <ul className="list_none social_icons social_white">
                <li><Link to="#"><i className="ion-social-facebook" /></Link></li>
                <li><Link to="#"><i className="ion-social-twitter" /></Link></li>
                <li><Link to="#"><i className="ion-social-googleplus" /></Link></li>
                <li><Link to="#"><i className="ion-social-instagram-outline" /></Link></li>
              </ul>
            </div>
            <div className="team_title radius_lbrb_10 text-center">
              <h5><Link to="#">Rebeka Alig</Link></h5>
              <span>English Teacher</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="team_box team_style1 box_shadow1 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.05s" style={{animationDelay: '0.05s', opacity: 1}}>
            <div className="team_img">
              <img src="assets/images/team_img1.jpg" alt="team5" />
              <ul className="list_none social_icons social_white">
                <li><Link to="#"><i className="ion-social-facebook" /></Link></li>
                <li><Link to="#"><i className="ion-social-twitter" /></Link></li>
                <li><Link to="#"><i className="ion-social-googleplus" /></Link></li>
                <li><Link to="#"><i className="ion-social-instagram-outline" /></Link></li>
              </ul>
            </div>
            <div className="team_title radius_lbrb_10 text-center">
              <h5><Link to="#">Henry Pole</Link></h5>
              <span>English Teacher</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="team_box team_style1 box_shadow1 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.06s" style={{animationDelay: '0.06s', opacity: 1}}>
            <div className="team_img">
              <img src="assets/images/team_img6.jpg" alt="team6" />
              <ul className="list_none social_icons social_white">
                <li><Link to="#"><i className="ion-social-facebook" /></Link></li>
                <li><Link to="#"><i className="ion-social-twitter" /></Link></li>
                <li><Link to="#"><i className="ion-social-googleplus" /></Link></li>
                <li><Link to="#"><i className="ion-social-instagram-outline" /></Link></li>
              </ul>
            </div>
            <div className="team_title radius_lbrb_10 text-center">
              <h5><Link to="#">Jesica Belly</Link></h5>
              <span>Chemistry Teacher</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="team_box team_style1 box_shadow1 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.07s" style={{animationDelay: '0.07s', opacity: 1}}>
            <div className="team_img">
              <img src="assets/images/team_img4.jpg" alt="team7" />
              <ul className="list_none social_icons social_white">
                <li><Link to="#"><i className="ion-social-facebook" /></Link></li>
                <li><Link to="#"><i className="ion-social-twitter" /></Link></li>
                <li><Link to="#"><i className="ion-social-googleplus" /></Link></li>
                <li><Link to="#"><i className="ion-social-instagram-outline" /></Link></li>
              </ul>
            </div>
            <div className="team_title radius_lbrb_10 text-center">
              <h5><Link to="#">John Figery</Link></h5>
              <span>Computer Teacher</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="team_box team_style1 box_shadow1 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.08s" style={{animationDelay: '0.08s', opacity: 1}}>
            <div className="team_img">
              <img src="assets/images/team_img2.jpg" alt="team8" />
              <ul className="list_none social_icons social_white">
                <li><Link to="#"><i className="ion-social-facebook" /></Link></li>
                <li><Link to="#"><i className="ion-social-twitter" /></Link></li>
                <li><Link to="#"><i className="ion-social-googleplus" /></Link></li>
                <li><Link to="#"><i className="ion-social-instagram-outline" /></Link></li>
              </ul>
            </div>
            <div className="team_title radius_lbrb_10 text-center">
              <h5><Link to="#">Wendy Core</Link></h5>
              <span>Computer Teacher</span>
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

export default TeacherStaff

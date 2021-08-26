import React,{useState,useEffect} from 'react'

import { Link } from "react-router-dom";
import Footer from '../HomePage/Footer'
import Header from '../HomePage/Header'
import NoticeHeader from '../HomePage/NoticeHeader'
import axios from 'axios'

const AboutIndex = () => {
    
    return (
        <>  
            <NoticeHeader />
            <Header />

            <section  className="page-title-light breadcrumb_section parallax_bg overlay_bg_50" style={{backgroundImage:'url("https://images.pexels.com/photos/1400141/pexels-photo-1400141.jpeg")', backgroundRepeat:'no-repeat',backgroundPosition: 'center',backgroundSize: 'cover',height:'80px', paddingTop:'18px'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="page-title">
                <h1 style={{textAlign:'center'}}>About Us</h1>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      {/* END SECTION BANNER */}
      {/* START SECTION FEATURE */}
      <section style={{backgroundImage: 'url("/assets/images/white_wall.png")', backgroundRepeat:'no-repeat',backgroundPosition: 'center',backgroundSize: 'cover',paddingTop:'38px'}} className="bg_gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
                <div className="heading_s1 text-center">
                  <h2>Why Choose KBPS SCHOOL</h2>
                </div>
                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div style={{borderRadius:'60px',backgroundColor: '#0000'}} className="icon_box text-center icon_box_style2 box_shadow2 radius_all_10 animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                <div className="box_icon bg_danger mb-3">
                  <img src="assets/images/book.png" alt="book" />
                </div>
                <div className="intro_desc">
                  <h5>Books &amp; Library</h5>
                  <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div style={{borderRadius:'60px',backgroundColor: '#0000'}} className="icon_box text-center icon_box_style2 box_shadow2 radius_all_10 animation" data-animation="fadeInUp" data-animation-delay="0.03s">
                <div className="box_icon bg_default mb-3">
                  <img src="assets/images/globe.png" alt="globe" />
                </div>
                <div className="intro_desc">
                  <h5>Learn Courses Online</h5>
                  <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div style={{borderRadius:'60px',backgroundColor: '#0000'}} className="icon_box text-center icon_box_style2 box_shadow2 radius_all_10 animation" data-animation="fadeInUp" data-animation-delay="0.04s">
                <div className="box_icon bg_light_green mb-3">
                  <img src="assets/images/instructors.png" alt="instructors" />
                </div>
                <div className="intro_desc">
                  <h5>Expert Instructors</h5>
                  <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 
    <section className="overflow-hidden res_md_p_0">
  <div className="container-fluid p-0">
    <div className="row no-gutters align-items-center">
      <div className="col-md-6">
        <div className="box_shadow1 bg-white overlap_section padding_eight_all">
          <div className="animation animated fadeInLeft" data-animation="fadeInLeft" data-animation-delay="0.02s" style={{animationDelay: '0.02s', opacity: 1}}>
            <div className="heading_s1"> 
              <h2>About Us</h2>
            </div>
            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="animation animated fadeInRight" data-animation="fadeInRight" data-animation-delay="0.03s" style={{animationDelay: '0.03s', opacity: 1}}>
          <div className="overlay_bg_30 about_img z_index_minus1">	
            <img className="w-100" src="assets/images/about_img.jpg" alt="about_img" />
          </div>
          <a href="https://www.youtube.com/watch?v=7e90gBu4pas" className="video_popup video_play">
            <span className="ripple"><i className="ion-play ml-1" /></span>
          </a>
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
              <li><a href="#"><i className="ion-social-facebook" /></a></li>
              <li><a href="#"><i className="ion-social-twitter" /></a></li>
              <li><a href="#"><i className="ion-social-googleplus" /></a></li>
              <li><a href="#"><i className="ion-social-instagram-outline" /></a></li>
            </ul>
          </div>
          <div className="team_title radius_lbrb_10 text-center">
            <h5><a href="#">Aden Smith</a></h5>
            <span>Head Of Department</span>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="team_box team_style1 box_shadow1 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.02s" style={{animationDelay: '0.02s', opacity: 1}}>
          <div className="team_img">
            <img src="assets/images/team_img2.jpg" alt="team2" />
            <ul className="list_none social_icons social_white">
              <li><a href="#"><i className="ion-social-facebook" /></a></li>
              <li><a href="#"><i className="ion-social-twitter" /></a></li>
              <li><a href="#"><i className="ion-social-googleplus" /></a></li>
              <li><a href="#"><i className="ion-social-instagram-outline" /></a></li>
            </ul>
          </div>
          <div className="team_title radius_lbrb_10 text-center">
            <h5><a href="#">Kally Brooks</a></h5>
            <span>Professor</span>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="team_box team_style1 box_shadow1 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.03s" style={{animationDelay: '0.03s', opacity: 1}}>
          <div className="team_img">
            <img src="assets/images/team_img3.jpg" alt="team3" />
            <ul className="list_none social_icons social_white">
              <li><a href="#"><i className="ion-social-facebook" /></a></li>
              <li><a href="#"><i className="ion-social-twitter" /></a></li>
              <li><a href="#"><i className="ion-social-googleplus" /></a></li>
              <li><a href="#"><i className="ion-social-instagram-outline" /></a></li>
            </ul>
          </div>
          <div className="team_title radius_lbrb_10 text-center">
            <h5><a href="#">David clark</a></h5>
            <span>Chemistry Teacher</span>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="team_box team_style1 box_shadow1 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.04s" style={{animationDelay: '0.04s', opacity: 1}}>
          <div className="team_img">
            <img src="assets/images/team_img4.jpg" alt="team4" />
            <ul className="list_none social_icons social_white">
              <li><a href="#"><i className="ion-social-facebook" /></a></li>
              <li><a href="#"><i className="ion-social-twitter" /></a></li>
              <li><a href="#"><i className="ion-social-googleplus" /></a></li>
              <li><a href="#"><i className="ion-social-instagram-outline" /></a></li>
            </ul>
          </div>
          <div className="team_title radius_lbrb_10 text-center">
            <h5><a href="#">Rebeka Alig</a></h5>
            <span>English Teacher</span>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

   
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
                <div className="heading_s1 text-center">
                  <h2>Student Say!</h2>
                </div>
                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                <div className="small_divider" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
              <div className="testimonial_slider testimonial_style1 carousel_slider owl-carousel owl-theme" data-margin={30} data-loop="true" data-autoplay="true" data-dots="false" data-responsive="{&quot;0&quot;:{&quot;items&quot;: &quot;1&quot;}, &quot;576&quot;:{&quot;items&quot;: &quot;2&quot;}, &quot;1199&quot;:{&quot;items&quot;: &quot;2&quot;}}">
                <div className="testimonial_box">
                  <div className="testimonial_img">
                    <img className="radius_all_5" src="assets/images/instructor.png" alt="client" />
                  </div>
                  <div className="testi_meta">
                    <div className="testi_user">
                      <h6>Lissa Castro</h6>
                      <span className="text_default">Co-Founder</span>
                    </div>
                    <div className="testi_desc">
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, quaeillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial_box">
                  <div className="testimonial_img">
                    <img className="radius_all_5" src="assets/images/instructor.png" alt="client" />
                  </div>
                  <div className="testi_meta">
                    <div className="testi_user">
                      <h6>Lissa Castro</h6>
                      <span className="text_default">Co-Founder</span>
                    </div>
                    <div className="testi_desc">
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, quaeillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial_box">
                  <div className="testimonial_img">
                    <img className="radius_all_5" src="assets/images/instructor.png" alt="client" />
                  </div>
                  <div className="testi_meta">
                    <div className="testi_user">
                      <h6>Lissa Castro</h6>
                      <span className="text_default">Co-Founder</span>
                    </div>
                    <div className="testi_desc">
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, quaeillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
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

export default AboutIndex



import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSkills } from "../../../actions/skillAction";

const AboutUs = ({ reff }) => {
  const skills = useSelector((state) => state.skills);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSkills());
  }, [dispatch]);
    return (
      <section style={{backgroundImage: 'url("assets/images/about.png")', borderRadius: '60px',backgroundRepeat:'no-repeat',backgroundPosition: 'center',backgroundSize: 'cover',paddingTop:'150px'}} className="overflow_hide">
      <div  className="container">
      <div className="heading_s1"> 
          <h2><center>Principal Notice </center></h2>
        </div>
        <div  className="row align-items-center">
          <div className="col-md-7">
            <div style={{paddingBottom:'100px'}} className="animation" data-animation="fadeInLeft" data-animation-delay="0.01s">
              <div className="floating">
                <div className="card-object rotate">
                  <header></header>
                  <aside></aside>
                  <main>
                    {skills.map((data)=>(
                    <blockquote className="message">{data.type}</blockquote>


                    ))}
                  
                  </main>
                  <footer className="author">KBPS SCHOOL</footer>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <img src="assets/images/about_img2.png" alt="about_img2" />
          </div>
        </div>
      </div>
    </section>

    )
}

export default AboutUs

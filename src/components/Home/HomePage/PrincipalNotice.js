import React from 'react'
import Marquee from 'react-marquee-master';
import { Link } from "react-router-dom";

const PrincipalNotice = () => {
    const marqueeItems=[
        <p>1 publishing and graphic design to cool and awsome notice nicetice</p>,
        <p>2 publishing and graphic design to cool and awsome notice nicetice</p>,
        <p>3 publishing and graphic design to cool and awsome notice nicetice</p>,
        <p>4 publishing and graphic design to cool and awsome notice nicetice</p>,
        <p>5 publishing and graphic design to cool and awsome notice nicetice</p>,
        <p>6 publishing and graphic design to cool and awsome notice nicetice</p>,
        <p>7 publishing and graphic design to cool and awsome notice nicetice</p>,
        <p>8 publishing and graphic design to cool and awsome notice nicetice</p>,
        <p>9 publishing and graphic design to cool and awsome notice nicetice</p>,
        <p>10 publishing and graphic design to cool and awsome notice nicetice</p>,
        <p>11 publishing and graphic design to cool and awsome notice nicetice</p>,
        <p>12 publishing and graphic design to cool and awsome notice nicetice</p>,
        <p>13 publishing and graphic design to cool and awsome notice nicetice</p>,
        <p>14 publishing and graphic design to cool and awsome notice nicetice</p>,
];
    return (
        <>

            <section className="overflow_hide">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-5 col-sm-6">
                <div className="team_box team_style1 box_shadow1 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.01s" style={{animationDelay: '0.01s', opacity: 1}}>
          <div className="team_img">
          <img src="assets/images/about_img2.png" alt="about_img2" />

            <ul className="list_none social_icons social_white">
              <li><Link to="#"><i className="ion-social-facebook" /></Link></li>
              <li><Link to="#"><i className="ion-social-twitter" /></Link></li>
              <li><Link to="#"><i className="ion-social-googleplus" /></Link></li>
              <li><Link to="#"><i className="ion-social-instagram-outline" /></Link></li>
            </ul>
          </div>
          <div className="team_title radius_lbrb_10 text-center">
            <h3><Link style={{ textDecoration: 'none'}} to="#">Sh. Dilawar Singh</Link></h3>
            <span>Chairman of the School</span>
          </div>
        </div>
                    
                </div>
                <div className="col-lg-1 col-sm-6">
                   
                </div>
                <div className="col-lg-6 col-sm-6">
                    <div className="padding_eight_all animation fancy_box" data-animation="fadeInRight" data-animation-delay="0.02s">
                                
                       <Marquee height='300' direction='up' marqueeItems={marqueeItems} />

                            
                    </div>
                </div>
                </div>
            </div>
            </section>


        </>
    )
}

export default PrincipalNotice

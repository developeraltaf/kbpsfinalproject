import React from 'react'
import Footer from '../HomePage/Footer'
import Header from '../HomePage/Header'
import NoticeHeader from '../HomePage/NoticeHeader'
import "../css/facility.css"

export default function FacilityIndex() {
   

    return (
        <>
            <NoticeHeader />
            <Header />

           <div className="main-content">
                <div id="rs-about" className="rs-about style1 pt-100 pb-100 md-pt-70 md-pb-70">
                    <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 pl-60 order-last md-pl-15 md-mb-60">
                        <div className="img-part js-tilt">
                            <img className src="images/about3.png" alt />
                            <img className="shape top-center animated rotate infinite" src="images/image-center-circle.png" alt="Cirle Shape Img" />
                        </div>
                        </div>
                        <div className="col-lg-5">
                        <div className="sec-title mb-26 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">
                            <h2 className="title">Computer Lab</h2>
                            <div className="desc pr-30">Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed eius to mod tempors incididunt ut labore et dolore magna this aliqua  enims ad minim.</div>
                        </div>
                        
                        </div>
                    </div>
                    </div>
                </div>
                <div id="rs-about" className="rs-about style1 pt-100 pb-100 md-pt-70 md-pb-70">
                    <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 pl-60 order-last md-pl-15 md-mb-60">
                        <div className="img-part js-tilt">
                            <img className src="images/about3.png" alt />
                            <img className="shape top-center animated rotate infinite" src="images/image-center-circle.png" alt="Cirle Shape Img" />
                        </div>
                        </div>
                        <div className="col-lg-5">
                        <div className="sec-title mb-26 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">
                            <h2 className="title">Library</h2>
                            <div className="desc pr-30">Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed eius to mod tempors incididunt ut labore et dolore magna this aliqua  enims ad minim.</div>
                        </div>
                        
                        </div>
                    </div>
                    </div>
                </div>
           
            </div>

          
            <Footer />
        </>
    );
}




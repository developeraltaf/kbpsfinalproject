 import React from 'react'
import Marquee from 'react-marquee-master';

import Carousel from 'react-bootstrap/Carousel'
import '../css/Slider.css'
const Slider = () => {

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

  const options = {
    margin: 30,
    loop:true,
    responsiveClass: true,
    dots: false,
    autoplay: true,
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

    





<section style={{overflow: "hidden"}}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-7">
            
                <Carousel {...options}   controls={false} touch={true}>
  <Carousel.Item>
    <img 
      className="d-block w-100 slidersize"
      src="assets/images/banner1.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img 
      className="d-block w-100 slidersize"
      src="assets/images/banner2.jpg"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img 
      className="d-block w-100 slidersize"
      src="assets/images/banner3.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
            
          </div>
          <div className="col-lg-4 col-md-5">
            <div >
                  <h4>Notice Board</h4>
            </div>
              <Marquee height='390' direction='up' marqueeItems={marqueeItems} />
            
          </div>
        </div>
      </div>
    </section>


        
    </>
  )
}

export default Slider

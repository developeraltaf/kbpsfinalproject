import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../css/Slider.css'
const Slider = () => {


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

    </>
  )
}

export default Slider

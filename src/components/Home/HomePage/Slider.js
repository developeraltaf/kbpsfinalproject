import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
const Slider = () => {
  return (
    <>

<Carousel controls={false} touch={true}>
  <Carousel.Item>
    <img style={{width:'800px', height:'460px'}}
      className="d-block w-100"
      src="assets/images/banner1.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img style={{width:'800px', height:'460px'}}
      className="d-block w-100"
      src="assets/images/banner2.jpg"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img style={{width:'800px', height:'460px'}}
      className="d-block w-100"
      src="assets/images/banner3.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>

    </>
  )
}

export default Slider

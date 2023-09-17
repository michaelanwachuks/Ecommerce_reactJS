import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


 function ImageSlider ( ) {


     return (
     <div>
      
       <section className="slider container mb-3">
 　　　        <Carousel>
 　　　      <Carousel.Item className='slide'>
 　　　        <img
 　　　          className="d-block w-100"
 　　　          src= {process.env.PUBLIC_URL + '/bg1.jpg'}
 　　　          alt="First slide"
 　　　        />
 　　　      </Carousel.Item>
 　　　      <Carousel.Item className='slide'>
 　　　        <img
 　　　          className="d-block w-100"
 　　　          src={process.env.PUBLIC_URL + 'bg2.jpg'}
 　　　          alt="Second slide"
 　　　        />
 　　　      </Carousel.Item>
 　　　      <Carousel.Item className='slide'>
 　　　        <img
 　　　          className="d-block w-100"
 　　　          src={process.env.PUBLIC_URL + 'bg3.jpg'}
 　　　          alt="Third slide"
 　　　        />
 　　　      </Carousel.Item>
 　　　    </Carousel>
 　　　    </section>
 
      
   
   </div>

  )
}

export default ImageSlider;
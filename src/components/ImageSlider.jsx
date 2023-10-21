import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import sales from '../assets/sales.jpeg';
import imageslider from './imageslider.css';


 function ImageSlider ( ) {


     return (
     <div>
      
       <section className="slider container mb-3">
         
 　　　        <Carousel>
 　　　      <Carousel.Item className='slide'>
 　　　        <img
 　　　          className="d-block w-100" height="250"
 　　　          src= {sales}
 　　　          alt="First slide"
 　　　        />
 　　　      </Carousel.Item>
 　　　      <Carousel.Item className='slide'>
 　　　        <img
 　　　          className="d-block w-100" height="250"
 　　　          src={sales}
 　　　          alt="Second slide"
 　　　        />
 　　　      </Carousel.Item>
 　　　      <Carousel.Item className='slide'>
 　　　        <img
 　　　          className="d-block w-100" height="250"
 　　　          src={sales}
 　　　          alt="Third slide"
 　　　        />
 　　　      </Carousel.Item>
 　　　    </Carousel>
 　　　    </section>
 
      
   
   </div>

  )
}

export default ImageSlider;
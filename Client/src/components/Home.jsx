import React from 'react'
import Product from './Product'
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
  } from 'mdb-react-ui-kit'; 

const Home = () => {
    return (
        <MDBCarousel showIndicators showControls fade>
        <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src="/assets/images/home/img4.png" alt='...' />
          <MDBCarouselCaption>
            <h4><b>Accesorios para tu celular</b></h4>
            <h5><b>Adquiere productos de gran calidad a buen precio, que esperas!</b></h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src="/assets/images/home/img7.jpg" alt='...' />
          <MDBCarouselCaption>
            <h4><b>Celulares</b></h4>
            <h5><b>Adquiere equipos con nosotros totalmente nuevos!</b></h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src="/assets/images/home/img6.jpg" alt='...' />
          <MDBCarouselCaption>
            <h4><b>Apple</b></h4>
            <h5><b>Adquiere productos y accesorios apple!</b></h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    )
}

export default Home

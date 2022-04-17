import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

function ImgSlider() {

let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
}

  return (
    <Carousel {...settings} >
        {/* <Wrap>
            <MovieCover src="/images/slider-badging.jpg" />
        </Wrap>
        <Wrap>
            <MovieCover src="/images/slider-badag.jpg" />
        </Wrap> */}
        {/* <Wrap>
            <MovieCover  src="/images/slider-scale.jpg" />
        </Wrap> */}
        <Wrap>
            <OverlayImage src="/images/station-text.png"/>
            <MovieCover src="/images/station.jpeg" />  
        </Wrap>
        <Wrap>
            <OverlayImage style={{marginLeft:'10px', marginTop:'10px', maxHeight:'350px'}} src="/images/nile-text.png"/>
            <MovieCover src="/images/nile-banner.jpeg" /> 
        </Wrap>
        <Wrap>
            <OverlayImage style={{marginLeft:'100px', marginTop:'10px', maxHeight:'350px'}} src="/images/kardashians-text.png"/>
            <MovieCover src="/images/kardashians-banner.jpeg" /> 
        </Wrap>
        <Wrap>
            <OverlayImage style={{marginLeft:'100px', marginTop:'10px', maxHeight:'350px'}} src="/images/greys-text.png"/>
            <MovieCover src="/images/greys-banner.jpeg" /> 
        </Wrap>
        <Wrap>
            <OverlayImage style={{marginLeft:'100px', marginTop:'15px', maxHeight:'350px'}} src="/images/senior-text.png"/>
            <MovieCover src="/images/senior.jpeg" /> 
        </Wrap>
        <Wrap>
            <OverlayImage style={{marginLeft:'50px', marginTop:'30px', maxHeight:'350px'}} src="/images/simpsons-text.png"/>
            <MovieCover src="/images/simpsons-banner.jpeg" /> 
        </Wrap>
    </Carousel>
  )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }
    
    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }
`

const Wrap = styled.div`
    cursor: pointer;
    width:100%;
`

const MovieCover = styled.img`
border: 4px solid transparent; 
border-radius: 4px;
width: 100%;
height: 100%;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition-duration: 300ms;

&:hover {
    border: 4px solid rgb(249, 249, 249, 0.8);

}
`

const OverlayImage = styled.img`
    margin-left:100px;
    max-height:250px;
    position: absolute;
`
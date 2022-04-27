import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Disney(props) {
  const [videoEnded, setVideoEnded] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const { offset } = props;
  
  console.log('opacity:', opacity);

  useEffect(() => {
    var scrollMaxY = window.scrollMaxY || document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var tempOpacity = (offset / scrollMaxY) * 2;
    
    if (tempOpacity > 1) {
      tempOpacity = 1;
    }
    tempOpacity = 1 - tempOpacity;
    if(tempOpacity < 0.25){
      tempOpacity = 0.25;
    }

    setOpacity(tempOpacity);
  }, [offset]);

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    rows: 1,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <Container>
      <Background opacity={opacity}>
        {videoEnded ? (
          <img
            className="fade-in"
            src="/images/disney-viewer.jpeg"
          />
        ) : (
          <video
            onEnded={() => setVideoEnded(true)}
            muted
            autoPlay
            src="/videos/disney-view.mp4"
          />
        )}
      </Background>

      <Content>
        <Title>Featured</Title>
        <Carousel {...settings}>
          <Wrap>
            <img src="./images/movies/iceage1.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/nate.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/coco.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/proud.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/iceage.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/olivia.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/paraeles.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/man.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/bluey.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/mickey.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/pjmasks.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/cheaper.jpeg" />
          </Wrap>
        </Carousel>

        <Title>Walt Disney Animation Studios</Title>
        <Carousel {...settings}>
          <Wrap>
            <img src="./images/movies/dumbo.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/cinderella.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/lady-tramp.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/pocahontas.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/frozen.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/lion.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/aladin.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/princess-frog.jpeg" />
          </Wrap>
        </Carousel>

        <Title>Live Actions Series and Specials</Title>
        <Carousel {...settings}>
          <Wrap>
            <img src="./images/movies/paraeles.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/olivia.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/high-school.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/robots.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/inter.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/nate.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/turner.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/just-beyond.jpeg" />
          </Wrap>
        </Carousel>
        <Title>Additional Animated Movies</Title>
        <Carousel {...settings}>
          <Wrap>
            <img src="./images/movies/phineas.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/frankenwine.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/miraculus.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/ducktales.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/tinkerbell.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/nate.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/turner.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/just-beyond.jpeg" />
          </Wrap>
        </Carousel>
      </Content>
    </Container>
  );
}

export default Disney;

const Title = styled.h3`
  position: relative;
`;

const Background = styled.div`
display: flex;
flex-direction: column;
//background-attachment: fixed;
width: 100%;
position: fixed;
opacity: ${(props) => `${props.opacity}`};


 video {
   overflow-y: hidden;
   width: 100%; 
 }


 .fade-in {
   animation: fadeIn ease 2s;
   -webkit-animation: fadeIn ease 2s;
   -moz-animation: fadeIn ease 2s;
   -o-animation: fadeIn ease 2s;
   -ms-animation: fadeIn ease 2s;
 }
 @keyframes fadeIn {
   0% {
     opacity:0;
   }
   100% {
     opacity:1;
   }
 }

}

`;

const Content = styled.div`
  padding-top: 600px;
  padding-left: 50px;
  padding-right: 50px;
`;

const Container = styled.main`
  background-attachment: scroll;
`;

const Wrap = styled.div`
  border-radius: 7px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

const Carousel = styled(Slider)`
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-slide {
    padding: 10px 10px;
    height: 100%;
  }

  .slick-slide img {
    height: 100%;
    object-fit: contain;
  }

  .slick-list {
    overflow: hidden;
  }

  .slick-track {
  }

  button {
    z-index: 1;
  }
`;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [name, setName] = useState("joker");

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/movies?name=${name}`)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  console.log(movies);

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    rows: 1,
    adaptiveHeight:true,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <Container>
      <h3>New To Disney+</h3>
      {/* <button onClick={()=>setName('joker')}>Joker</button>
      <button onClick={()=>setName('cruella')}>Cruella</button>
      <button onClick={()=>setName('avengers')}>Avengers</button>
      <button onClick={()=>setName('ironman')}>IronMan</button> */}
      <Content>
        {/* {movies.map((movie, index) => {
          return (
          <Link to={`/detail/${name}`}>
            <Wrap>
              <img src={movie} />
            </Wrap>
          </Link>
          )
        })} */}
        <Carousel  {...settings}>
          <Wrap>
            <img src="./images/movies/kardashians.webp" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/iceage.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/paraeles.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/man.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/singledrunk.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/coco.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/frozen2.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/ironman2.jpeg" />
          </Wrap>
        </Carousel>

        <h3>Recomended For You</h3>
        <Carousel {...settings}>
        <Link to="/detail">
          <Wrap>
            <img src="./images/movies/avengers.jpeg" />
          </Wrap>
          </Link>
          <Wrap>
            <img src="./images/movies/cruella.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/ironman.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/joker.webp" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/avengers.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/ironman2.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/cruella.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/ironman.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/joker.webp" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/coco.jpeg" />
          </Wrap>
        </Carousel>
        
        <h3>What To Watch Tonight</h3>
        <Carousel {...settings}>
          <Wrap>
            <img src="./images/movies/death2.png"/> 
          </Wrap>
          <Wrap>
            <img src="./images/movies/kardashians.webp" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/modern.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/encanto.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/bohemian.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/singledrunk.jpeg" />
          </Wrap>
        </Carousel>
        <h3>Family Favorites</h3>
        <Carousel  {...settings}>
          <Wrap>
            <img src="./images/movies/kardashians.webp" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/singledrunk.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/coco.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/frozen2.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/ironman2.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/iceage.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/paraeles.jpeg" />
          </Wrap>
          <Wrap>
            <img src="./images/movies/man.jpeg" />
          </Wrap>
        </Carousel>

        <h3>Coming Soon</h3>

        <Carousel {...settings}>
          <Wrap>
            <img src="./images/msmarvel.jpeg"/>
          </Wrap>
          <Wrap>
            <img src="./images/baymax.jpeg"/>
          </Wrap>
          <Wrap>
            <img src="./images/willow.jpeg"/>
          </Wrap>
          <Wrap>
            <img src="./images/america.jpeg"/>
          </Wrap>
          <Wrap>
            <img src="./images/sneak.jpeg"/>
          </Wrap>
        </Carousel>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
`;

const Content = styled.div`

`;

const Wrap = styled.div`
  border-radius: 9px;
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
  }

  .slick-list {
    overflow: visible;
  }

  .slick-track {
    
  }

  button {
    z-index: 1;
}
  

`;

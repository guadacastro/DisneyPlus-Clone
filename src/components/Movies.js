import React, { useEffect, useState } from "react";
import styled from "styled-components";
//import { selectMovies } from "../features/movie/movieSlice"
//import { useSelector } from "react-redux"
import axios from "axios";
import { Link } from 'react-router-dom';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [name, setName] = useState('joker');

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/movies?name=${name}`)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [name])
  
  console.log(movies);

  return (
    <Container>
      <h4>Recomended for You</h4>
      <button onClick={()=>setName('joker')}>Joker</button>
      <button onClick={()=>setName('cruella')}>Cruella</button>
      <button onClick={()=>setName('avengers')}>Avengers</button>
      <button onClick={()=>setName('ironman')}>IronMan</button>
      <Content>
        {movies.map((movie, index) => {
          return (
          <Link to={`/detail/${name}`}>
            <Wrap>
              <img src={movie} />
            </Wrap>
          </Link>

          )
        })}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
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

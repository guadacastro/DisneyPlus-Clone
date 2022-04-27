import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Viewers() {
  const [hovered, setHovered] = useState("");

  console.log("hovered:", hovered);

  return (
    <Container>
      <Link to="/disney">
        <Wrap
          hovering={hovered === "disney"}
          onMouseEnter={() => setHovered("disney")}
          onMouseLeave={() => setHovered("")}
        >
          <img src="/images/viewers-disney.png" />
          {hovered === "disney" && (
            <video loop muted autoPlay src="/videos/disney.mp4" />
          )}
        </Wrap>
      </Link>
      <Link to="/pixar">
        <Wrap
          hovering={hovered === "pixar"}
          onMouseEnter={() => setHovered("pixar")}
          onMouseLeave={() => setHovered("")}
        >
          <img src="/images/viewers-pixar.png" />
          {hovered === "pixar" && (
            <video loop muted autoPlay src="/videos/pixar.mp4" />
          )}
        </Wrap>
      </Link>
      <Link to="/marvel" >
      <Wrap
        hovering={hovered === "marvel"}
        onMouseEnter={() => setHovered("marvel")}
        onMouseLeave={() => setHovered("")}
      >
        <img src="/images/viewers-marvel.png" />
        {hovered === "marvel" && (
          <video loop muted autoPlay src="/videos/marvel.mp4" />
        )}
      </Wrap>
      </Link>
      <Link to="/starwars" > 
      <Wrap
        hovering={hovered === "starwars"}
        onMouseEnter={() => setHovered("starwars")}
        onMouseLeave={() => setHovered("")}
      >
        <img src="/images/viewers-starwars.png" />
        {hovered === "starwars" && (
          <video loop muted autoPlay src="/videos/starwars.mp4" />
        )}
      </Wrap>
      </Link>
      <Link to="/nationalgeographic"> 
      <Wrap
        hovering={hovered === "national"}
        onMouseEnter={() => setHovered("national")}
        onMouseLeave={() => setHovered("")}
      >
        <img src="/images/viewers-national.png" />
        {hovered === "national" && (
          <video loop muted autoPlay src="/videos/national.mp4" />
        )}
      </Wrap>
      </Link>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 30px 0px 26px;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div.attrs((props) => {})`
  border-radius: 10px;
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: ${(props) => (props.hovering ? "absolute" : "initial")};
  }

  video {
    width: 100%;
    border-radius: 9px;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

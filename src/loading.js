import React, { useEffect, useState } from "react";
import styled from "styled-components";

const S = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 300;
  background: white;
  img {
    opacity: 0;
    transition: 0.5s;
    width: 200px;
    display: block;
    margin: auto;
    top: 0;
    bottom: 0;
    position: absolute;
    left: 0;
    right: 0;
    transform: scale(0.9);
    &.load {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

let url =
  "https://res.cloudinary.com/baudelaire/image/upload/v1574750042/focus-scene/logo.png";

export const Loading = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    let logo = new Image();
    logo.src = url;
    logo.onload = () => {
      setLoad(true);
    };
  }, []);

  return (
    <S>
      <img className={load ? "load" : undefined} alt="logo" src={url} />
    </S>
  );
};

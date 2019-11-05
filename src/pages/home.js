import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LazyLoad } from "../functions/lazyload";

const S = styled.div`
  padding-top: 5px;

  opacity: 0;
  transition: 0.5s;
  transform: translatey(20px);
  &.load {
    opacity: 1;
    transform: translatey(0px);
  }

  div {
    margin: 10px;
    margin-bottom: 20px;
    height: 200px;
    width: calc(100% - 20px);

    opacity: 0;
    transition: 0.5s;
    transform: scale(0.9);
    &.io {
      opacity: 0.5;
      background: black;
      transform: scale(1);
    }
  }
`;

export const Home = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);

    let targets = document.querySelectorAll("div");
    targets.forEach(LazyLoad);
  }, []);

  return (
    <S className={load ? "load" : undefined}>
      {[...Array(10)].map((x, i) => (
        <div key={i} />
      ))}
    </S>
  );
};

import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { LazyLoad } from "./functions/lazyload";

const S = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  opacity: 0;
  transition: 0.5s;
  transform: scale(0.9);

  &.load {
    opacity: 1;
    transform: scale(1);
  }

  .close {
    font-size: 30px;
    position: fixed;
    right: 0;
    top: 0;
    margin: 10px;
  }

  .info {
    overflow-y: hidden;
    overflow-x: scroll;
    white-space: nowrap;
    margin-top: 40px;
    height: calc(100% - 60px);

    div {
      margin: 20px;
      display: inline-block;
      margin-bottom: 20px;
      margin-right: -20px;
      :last-child {
        margin-right: 20px;
      }
      height: calc(100% - 40px);
      width: calc(100% - 60px);
      background: black;

      opacity: 0.5;
      transition: 0.5s;
      transform: scale(0.9);
      &.io {
        opacity: 0.5;
        background: black;
        transform: scale(1);
      }
    }
  }
`;

export const Info = ({ toggle }) => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);

    let targets = document.querySelectorAll("div");

    targets.forEach(LazyLoad);
  }, []);

  return (
    <S className={load ? "load" : undefined}>
      <i className="material-icons-round close" onClick={() => toggle()}>
        close
      </i>

      <div className="info">
        {[...Array(3)].map((x, i) => (
          <div key={i} />
        ))}
      </div>
    </S>
  );
};

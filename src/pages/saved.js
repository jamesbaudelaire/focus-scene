import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LazyLoad } from "../functions/lazyLoad";

const S = styled.div`
  padding-top: 5px;

  div {
    margin: 10px;
    margin-bottom: 20px;
    height: 100px;
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

export const Saved = () => {
  useEffect(() => {
    let targets = document.querySelectorAll("div");
    targets.forEach(LazyLoad);
  }, []);

  return (
    <S>
      {[...Array(5)].map((x, i) => (
        <div key={i} />
      ))}
    </S>
  );
};

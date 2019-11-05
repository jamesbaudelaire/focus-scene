import React, { useState, useEffect } from "react";
import styled from "styled-components";

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

    const lazyLoad = tar => {
      let options = {
        root: null,
        rootMargin: "0px",
        threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
      };

      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          let el = entry.target;
          if (entry.intersectionRatio > 0.5) {
            el.classList.add("io");
          } else {
            el.classList.remove("io");
          }
        });
      }, options);

      io.observe(tar);
    };

    targets.forEach(lazyLoad);
  }, []);

  return (
    <S>
      {[...Array(10)].map((x, i) => (
        <div key={i} />
      ))}
    </S>
  );
};

import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { LazyLoad } from "functions/lazyLoad";

const S = styled.div`
  opacity: 0;
  transition: 0.5s;
  transform: scale(0.9);

  &.load {
    opacity: 1;
    transform: scale(1);
  }

  .gallery {
    white-space: nowrap;
    height: 250px;
    overflow-x: scroll;
  }

  .card {
    border-radius: 30px;
    margin: 20px;
    display: inline-block;
    height: calc(100% - 60px);

    margin-right: 0px;
    :last-child {
      margin-right: 20px;
    }

    opacity: 0.5;
    transition: 0.5s;
    transform: scale(0.9);
    &.io {
      opacity: 1;
      transform: scale(1);
      box-shadow: var(--shadow);
    }
  }
`;

export const Gallery = ({ scene }) => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);

    let targets = document.querySelectorAll(".card");

    targets.forEach(LazyLoad);
  }, []);

  return (
    <S className={load ? "load" : undefined}>
      <div className="scrollbar gallery">
        {[...Array(3)].map((x, i) => (
          <img
            className="card"
            key={i}
            alt="img"
            src={`https://res.cloudinary.com/baudelaire/image/upload/w_500/v1575012603/focus-scene/scenes/${scene}/${i +
              1}.jpg`}
          />
        ))}
      </div>
    </S>
  );
};

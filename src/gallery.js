import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { LazyLoad } from "./functions/lazyLoad";

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
    height: 300px;
    overflow-x: scroll;
  }

  .card {
    background-color: grey;
    background-size: cover;
    border-radius: 30px;
    overflow: hidden;
    margin: 20px;
    display: inline-block;
    margin-right: -10px;
    :last-child {
      margin-right: 20px;
    }
    height: calc(100% - 100px);
    width: calc(100% - 60px);

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

export const Gallery = ({ toggle }) => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);

    let targets = document.querySelectorAll(".card");

    targets.forEach(LazyLoad);
  }, []);

  return (
    <S className={load ? "load" : undefined}>
      <div className="gallery">
        {[...Array(3)].map((x, i) => (
          <div
            className="card"
            key={i}
            style={{
              backgroundImage: `url('https://source.unsplash.com/300x200/?room,${i}')`
            }}
          />
        ))}
      </div>
    </S>
  );
};

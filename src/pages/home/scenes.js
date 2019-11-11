import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LazyLoad } from "../../functions/lazyLoad";

const S = styled.div`
  .scene {
    i {
      font-size: 20px;
    }
    margin: 20px 10px;
    margin-bottom: 10px;
    width: calc(100% - 20px);

    opacity: 0;
    transition: 0.5s;
    transform: scale(0.8);
    &.io {
      opacity: 1;
      transform: scale(1);
    }

    .img {
      background-color: grey;
      background-size: cover;
      height: 200px;
      border-radius: 30px;
      box-shadow: var(--shadow);
      width: 100%;
      transition: 0.5s;
      &:active {
        transform: scale(0.9);
      }
    }

    .info {
      position: relative;
      bottom: 0;
      margin: 10px 20px;
      width: 50%;
    }
    .five-stars {
      position: absolute;
      top: 24px;
      z-index: -1;
      color: black;
    }
    .stars {
      color: var(--theme3);
    }
    .name {
      margin: 5px 0;
      font-family: var(--font2);
    }
  }
`;

export const Scenes = ({ search, scenes }) => {
  useEffect(() => {
    let targets = document.querySelectorAll(".scene");
    targets.forEach(LazyLoad);
  }, []);

  return (
    <S>
      {[...Array(scenes.length)].map((x, i) => (
        <div className="scene" key={i}>
          <div
            className="img"
            style={{
              backgroundImage: `url('https://source.unsplash.com/300x200/?room,${i}')`
            }}
            onClick={() => {
              search(scenes[i].name);
            }}
          />
          <div className="info">
            <div className="name">{scenes[i].name}</div>
            <div className="stars">
              {[...Array(scenes[i].stars)].map((s, i) => (
                <i key={i} className="material-icons-round">
                  star
                </i>
              ))}
            </div>
            <div className="five-stars">
              {[...Array(5)].map((s, i) => (
                <i key={i} className="material-icons-round">
                  star
                </i>
              ))}
            </div>
          </div>
        </div>
      ))}
    </S>
  );
};

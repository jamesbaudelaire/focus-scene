import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LazyLoad } from "../../functions/lazyLoad";

const S = styled.div`
  .scene {
    i {
      font-size: 20px;
    }
    margin: 20px;
    width: calc(100% - 40px);
    opacity: 0.5;
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
    .price {
      box-shadow: var(--shadow);
      position: absolute;
      bottom: 120px;
      right: 20px;
      background: white;
      padding: 5px 10px;
      border-radius: 30px;
    }
    .scene-type {
      margin: 10px 0;
      font-family: var(--font1);
      font-style: italic;
    }
    .info {
      position: relative;
      bottom: 0;
      margin: 20px;
      width: 50%;
    }
    .five-stars {
      position: absolute;
      bottom: 0px;
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
              backgroundImage: `url('https://res.cloudinary.com/baudelaire/image/upload/w_500/v1574746635/focus-scene/scenes/${
                scenes[i].url
              }.png')`
            }}
            onClick={() => {
              search(scenes[i].name);
            }}
          />
          <div className="price">{scenes[i].price}</div>
          <div className="info">
            <div className="name">{scenes[i].name}</div>
            <div className="scene-type">{scenes[i].type}</div>

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

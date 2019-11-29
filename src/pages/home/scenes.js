import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LazyLoad } from "../../functions/lazyLoad";
import { useDispatch } from "react-redux";
import { scene } from "../../redux/actions";

import { data } from "../../data";

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
      height: 250px;
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
      color: var(--theme3);
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

export const Scenes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let targets = document.querySelectorAll(".scene");
    targets.forEach(LazyLoad);
  }, []);

  return (
    <S>
      {Object.keys(data).map((x, i) => (
        <div className="scene" key={i}>
          <div
            className="img"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/baudelaire/image/upload/w_500/v1574746634/focus-scene/scenes/${x}/1.png')`
            }}
            onClick={() => {
              dispatch(scene(x));
            }}
          />
          <div className="price">{data[x].price}</div>
          <div className="info">
            <div className="name">{data[x].name}</div>
            <div className="scene-type">{data[x].type}</div>

            <div className="stars">
              {[...Array(data[x].stars)].map((s, i) => (
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

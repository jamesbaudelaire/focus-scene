import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LazyLoad } from "../../functions/lazyLoad";
import { useDispatch } from "react-redux";
import { getScene } from "../../redux/actions";
import { Info } from "ui/info";
import { data } from "../../data";

const S = styled.div`
  .scene {
    margin: 20px;
    width: calc(100% - 40px);
    opacity: 0;
    transition: 0.5s;
    transform: translatey(30px);
    &.io {
      opacity: 1;
      transform: translatey(0);
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
  }
`;

export const Scenes = ({ filterType }) => {
  const dispatch = useDispatch();

  let scenes = Object.keys(data);

  if (filterType) {
    scenes = scenes.filter(x => data[x].type == filterType);
  }

  useEffect(() => {
    let targets = document.querySelectorAll(".scene");

    targets.forEach(LazyLoad);
  });

  return (
    <S>
      {scenes.map((x, i) => (
        <div className="scene" key={i}>
          <div
            className="img"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/baudelaire/image/upload/w_500/v1574746634/focus-scene/scenes/${x}/1.png')`
            }}
            onClick={() => {
              dispatch(getScene(x));
            }}
          />
          <Info data={data[x]} />
        </div>
      ))}
    </S>
  );
};

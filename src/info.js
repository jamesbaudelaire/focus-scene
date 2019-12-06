import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { LazyLoad } from "./functions/lazyLoad";

import { useDispatch } from "react-redux";

import { data } from "data";

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
    margin-top: 30px;
    height: calc(100% - 40px);

    .card {
      color: white;
      background: black;
      border-radius: 30px;
      font-weight: bold;
      overflow: hidden;
      margin: 30px;
      margin-left: -30px;
      display: inline-block;

      :last-child {
        margin-right: 30px;
      }
      height: calc(100% - 60px);
      width: calc(100% - 80px);

      opacity: 0.5;
      transition: 0.5s;
      transform: scale(0.9);
      &.io {
        margin-left: 0px;
        :first-child {
          margin-left: 30px;
        }
        opacity: 1;
        transform: scale(1);
        box-shadow: var(--shadow);
      }
    }

    img {
      height: 100%;
      opacity: 0.5;
    }

    .overlay {
      top: 0;
      left: 0;
      height: 100%;
      border-radius: 30px;
      position: absolute;
      width: 100%;
      box-sizing: border-box;
    }

    .title {
      font-weight: bold;
      text-transform: uppercase;
      font-size: 24px;
      width: calc(100% - 40px);
      white-space: pre-wrap;
      font-family: var(--font2);
      position: absolute;
      bottom: 50%;
      padding: 20px;
    }

    hr {
      height: 3px;
      border-radius: 30px;
      width: calc(100% - 40px);
      left: 0;
      right: 0;
      position: absolute;
      top: calc(50% - 3px);
    }

    .text {
      padding: 20px;
      line-height: 20px;
      font-size: 12px;
      width: calc(100% - 40px);
      white-space: pre-wrap;
      font-family: var(--font1);
      position: absolute;
      top: 50%;
    }
  }
`;

let cards = [
  {
    title: `Connect Venue Owners to Photographers.`,
    text: `Focus Scene is a marketplace that provides a collection of unique, undiscovered locations for your next photoshoot.`
  },
  {
    title: `MAKE ANY SPACE YOUR LOCATION SETTING FOR PHOTOSHOOTS.`,
    text: `Become a verified venue owner on this app to lend your location for easy revenue, advertising, and networking.`
  },
  {
    title: `END YOUR SEARCH BY BEGINNING HERE.`,
    text: `Find attractive locations near you to shoot photography and personalize your favorites to easily share with others.`
  }
];

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

      <div className="scrollbar info">
        {cards.map((x, i) => (
          <div className="card" key={i}>
            <img
              alt="background"
              src={`https://res.cloudinary.com/baudelaire/image/upload/w_1000/v1575056621/focus-scene/intro/${i +
                1}.jpg`}
            />

            <div className="overlay">
              <div className="title">{x.title}</div>
              <hr />
              <div className="text">{x.text}</div>
            </div>
          </div>
        ))}
      </div>
    </S>
  );
};

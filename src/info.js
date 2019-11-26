import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { LazyLoad } from "./functions/lazyLoad";

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
      background-size: cover;
      background-color: grey;
      border-radius: 30px;
      color: grey;
      font-weight: bold;
      overflow: hidden;
      margin: 30px;
      display: inline-block;
      margin-right: 0px;
      :last-child {
        margin-right: 30px;
      }
      height: calc(100% - 60px);
      width: calc(100% - 70px);

      opacity: 0.5;
      transition: 0.5s;
      transform: scale(0.9);
      &.io {
        opacity: 1;
        transform: scale(1);
        box-shadow: var(--shadow);
      }
    }

    .overlay {
      background: white;
      opacity: 0.8;
      height: 100%;
      border-radius: 30px;
      position: absolute;
      width: 100%;
    }

    .title {
      font-weight: bold;
      text-transform: uppercase;
      font-size: 7vw;
      white-space: pre-wrap;
      font-family: var(--font2);
      position: absolute;
      bottom: 50%;
      padding: 40px;
      height: 140px;
    }

    hr {
      height: 3px;
      border-radius: 30px;
      width: 70%;
      left: 0;
      right: 0;
      position: absolute;
      top: calc(50% - 3px);
    }

    .text {
      line-height: 25px;
      font-size: 1rem;
      white-space: pre-wrap;
      font-family: var(--font1);
      position: absolute;
      top: 50%;
      padding: 40px;
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
        <div
          className="card"
          style={{
            backgroundImage: `url('https://source.unsplash.com/400x800/?scene,1')`
          }}
        >
          <div className="overlay">
            <div className="title">
              Connect <div style={{ color: "var(--theme2)" }}>Venue Owners</div>
              to <div style={{ color: "var(--theme1)" }}>Photographers.</div>
            </div>
            <hr />
            <div className="text">
              Focus Scene is a marketplace that provides a collection of unique,
              undiscovered locations for your next photoshoot.
            </div>
          </div>
        </div>

        <div
          className="card"
          style={{
            backgroundImage: `url('https://source.unsplash.com/400x800/?scene,2')`
          }}
        >
          <div className="overlay">
            <div className="center">
              <div className="title">
                MAKE ANY SPACE YOUR LOCATION SETTING FOR PHOTOSHOOTS.
              </div>
              <hr />
              <div className="text">
                Become a verified venue owner on this app to lend your location
                for easy revenue, advertising, and networking.
              </div>
            </div>
          </div>
        </div>

        <div
          className="card"
          style={{
            backgroundImage: `url('https://source.unsplash.com/400x800/?scene,3')`
          }}
        >
          <div className="overlay">
            <div className="center">
              <div className="title">END YOUR SEARCH BY BEGINNING HERE.</div>
              <hr />
              <div className="text">
                Find attractive locations near you to shoot photography and
                personalize your favorites to easily share with others.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </S>
  );
};

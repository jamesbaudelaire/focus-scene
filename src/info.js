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
    margin-top: 40px;
    height: calc(100% - 60px);

    .card {
      background-size: cover;
      background-color: grey;
      max-height: 600px;
      border-radius: 30px;
      color: grey;
      font-weight: bold;
      overflow: hidden;
      margin: 20px;
      display: inline-block;
      margin-right: -10px;
      :last-child {
        margin-right: 20px;
      }
      height: calc(100% - 60px);
      width: calc(100% - 80px);

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
      opacity: 0.75;
      height: 100%;
      border-radius: 30px;
    }

    .title {
      text-transform: uppercase;
      position: absolute;
      left: 0;
      text-align: left;
      font-size: 25px;
      width: calc(100% - 40px);
      white-space: pre-wrap;
      margin: 20px;
    }
    .text {
      font-size: 20px;
      position: absolute;
      bottom: 0;
      right: 0;
      margin: 20px;
      white-space: pre-wrap;
      text-align: right;
      font-family: var(--font2);
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
              Connect <div style={{ color: "var(--theme2)" }}>Venue Owners</div>{" "}
              to <div style={{ color: "var(--theme1)" }}>Photographers</div>
            </div>
            <div className="text">stuff</div>
          </div>
        </div>

        <div
          className="card"
          style={{
            backgroundImage: `url('https://source.unsplash.com/400x800/?scene,2')`
          }}
        >
          <div className="overlay">
            <div className="title">Connect Venue Owners with</div>
            <div className="text">stuff</div>
          </div>
        </div>

        <div
          className="card"
          style={{
            backgroundImage: `url('https://source.unsplash.com/400x800/?scene,3')`
          }}
        >
          <div className="overlay">
            <div className="title">Connect Venue Owners with</div>
            <div className="text">stuff</div>
          </div>
        </div>
      </div>
    </S>
  );
};

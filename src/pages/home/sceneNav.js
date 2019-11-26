import React, { useEffect, useState } from "react";
import styled from "styled-components";

const S = styled.div`
  background: var(--theme2);
  z-index: 200;
  transition: 0.5s;
  transform: translatey(50px);

  &.load {
    transform: translatey(0);
  }

  position: fixed;
  bottom: 0px;
  border-radius: 30px 30px 0 0;
  left: 0;
  width: 100%;
  text-align: center;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  div {
    color: white;
    padding: 10px;
    font-size: 12px;
    i {
      display: block;
      font-size: 24px;
      margin-bottom: 5px;
      transition: 0.5s;
      &:active {
        color: var(--theme3);
      }
    }
  }
`;

export const SceneNav = ({ close, scene }) => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
  }, []);

  const share = () => {
    if (navigator.share) {
      navigator.share({
        title: "Focus Scene",
        url: `/?${scene}`
      });
    } else {
      console.log(scene);
    }
  };

  const [saved, setSaved] = useState(false);

  const save = () => {
    setSaved(!saved);
  };

  return (
    <S className={load ? "load" : undefined}>
      <div
        onClick={() => {
          close(null);
        }}
      >
        <i className="material-icons-round back">arrow_back_ios</i>
        back
      </div>

      <div
        onClick={() => {
          console.log("l");
        }}
      >
        <i className="material-icons save">location_on</i>
        lcoation
      </div>

      <div
        onClick={() => {
          share();
        }}
      >
        <i className="material-icons-round share">linked_camera</i>
        share
      </div>
      <div
        onClick={() => {
          save();
        }}
      >
        <i
          className="material-icons-round save"
          style={{ color: saved ? "var(--theme1)" : "white" }}
        >
          collections_bookmark
        </i>
        bookmark
      </div>
    </S>
  );
};

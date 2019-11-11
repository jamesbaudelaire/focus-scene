import React, { useEffect, useState } from "react";
import styled from "styled-components";

const S = styled.div`
  background: #eb008c;

  transition: 0.5s;
  transform: translatey(50px);

  &.load {
    transform: translatey(0);
  }

  position: absolute;
  bottom: 0px;
  border-radius: 30px 30px 0 0;
  left: 0;
  width: 100%;
  text-align: center;

  .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  div {
    color: white;
    padding: 5px;
    font-size: 10px;
    i {
      display: block;
      font-size: 20px;
      margin-bottom: 5px;
      transition: 0.5s;
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
      <div className="buttons">
        <div>
          <i
            className="material-icons-round back"
            onClick={() => {
              close(null);
            }}
          >
            arrow_back_ios
          </i>
          back
        </div>
        <div>
          <i
            className="material-icons-round share"
            onClick={() => {
              share();
            }}
          >
            linked_camera
          </i>
          share
        </div>
        <div>
          <i
            className="material-icons-round save"
            onClick={() => {
              save();
            }}
            style={{ color: saved ? "var(--theme2)" : "white" }}
          >
            collections_bookmark
          </i>
          bookmark
        </div>
      </div>
    </S>
  );
};

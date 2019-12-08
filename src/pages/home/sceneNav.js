import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { exitScene, bookmarkScene } from "redux/actions";
import { data } from "data";

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

export const SceneNav = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
  }, []);

  const dispatch = useDispatch();

  let scene = useSelector(state => state.scene);
  let bookmarks = useSelector(state => state.bookmarks);

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

  return (
    <S className={load ? "load" : undefined}>
      <div
        onClick={() => {
          dispatch(exitScene());
        }}
      >
        <i className="material-icons-round back">arrow_back_ios</i>
        back
      </div>

      <div
        onClick={() => {
          let address = data[scene].location;
          if (
            navigator.platform.indexOf("iPhone") != -1 ||
            navigator.platform.indexOf("iPad") != -1 ||
            navigator.platform.indexOf("iPod") != -1
          ) {
            window.open("http://maps.apple.com/?q=" + address);
          } else {
            window.open("https://maps.google.com/maps?q=" + address);
          }
        }}
      >
        <i className="material-icons save">location_on</i>
        location
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
          dispatch(bookmarkScene(scene));
        }}
      >
        <i
          className="material-icons-round save"
          style={{
            color: bookmarks.includes(scene) ? "var(--theme1)" : "white"
          }}
        >
          collections_bookmark
        </i>
        bookmark
      </div>
    </S>
  );
};

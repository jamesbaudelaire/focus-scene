import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LazyLoad } from "../functions/lazyLoad";
import { useSelector, useDispatch } from "react-redux";
import { data } from "data";
import { deleteBookmark } from "redux/actions";

const S = styled.div`
  padding-top: 5px;

  .bookmark {
    margin: 20px;
    margin-bottom: 30px;
    height: 200px;
    width: calc(100% - 40px);
    border-radius: 30px;
    background: black;
    background-size: cover;
    opacity: 0;
    transition: 0.5s;
    transform: translatey(30px);
    &.io {
      opacity: 1;
      box-shadow: var(--shadow);
      transform: translatey(0);
    }

    .delete-button {
      font-size: 30px;
      padding: 10px;
      position: absolute;
      right: 0px;
      top: 0px;
      border-radius: 0 30px;
    }

    .name {
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 0 30px;
      padding: 10px 15px;
    }

    .name,
    .delete-button,
    .link {
      color: white;
      background: var(--theme2);
    }

    .link {
      position: absolute;
      bottom: 0px;
      right: 0px;
      font-size: 30px;
      padding: 10px;
      border-radius: 30px 0;
    }
  }
`;

export const Bookmarks = () => {
  const bookmarks = useSelector(state => state.bookmarks);
  const dispatch = useDispatch();

  useEffect(() => {
    let targets = document.querySelectorAll("div");
    targets.forEach((x, i) => {
      setTimeout(() => {
        LazyLoad(x);
      }, i * 100);
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <S>
      {bookmarks.map((x, i) => (
        <div
          key={x}
          className="bookmark"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/baudelaire/image/upload/w_500/v1574746634/focus-scene/scenes/${
              data[x].url
            }/1.png')`
          }}
        >
          <span className="name">{data[x].name}</span>
          <i
            className="material-icons delete-button"
            onClick={() => {
              dispatch(deleteBookmark(x));
            }}
          >
            delete
          </i>
          <a href={`${window.location.origin}/?${data[x].url}`}>
            <i className="material-icons link">link</i>
          </a>
        </div>
      ))}
    </S>
  );
};

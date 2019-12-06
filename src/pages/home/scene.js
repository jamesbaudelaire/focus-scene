import React, { useEffect, useState } from "react";
import { SceneNav } from "./sceneNav";

import { Gallery } from "./scene/gallery";
import { Reviews } from "./scene/reviews";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { data } from "../../data";

const S = styled.div`
  .scene-info {
    position: relative;
    margin: 20px;
  }

  .scene-page {
    font-family: var(--font2);
    font-size: 25px;
    width: calc(100% - 100px);
  }
  .scene-type {
    font-style: italic;
    font-family: var(--font2);
    font-size: 20px;
    margin: 10px 0px;
  }

  .scene-location {
    margin: 20px;

    i {
      font-size: 30px;
      color: red;
    }
  }

  .about-title,
  .contact-title {
    margin: 30px 0 10px 0;
    font-weight: bold;
    font-family: var(--font2);
  }
  .contact {
    .link {
      margin: 20px;
      i {
        font-size: 30px;
      }
      span {
        margin: 10px;
      }
      a,
      span {
        color: var(--theme3);
      }
    }
  }

  .owner {
    img {
      height: 100%;
    }
    height: 70px;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: var(--shadow);
    width: 70px;
    position: absolute;
    right: 0px;
    top: 0;
  }
`;

export const Scene = () => {
  const s = useSelector(state => state.scene);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const getLink = x => {
    switch (x.type) {
      case "web":
        return x.link;
      case "phone":
        return `tel:${x.link}`;
      default:
        return "?";
    }
  };

  return (
    <S className="scene-page">
      <Gallery scene={s} />

      <div className="scene-info">
        <div className="scene-page">{data[s].name}</div>

        <div className="scene-type">{data[s].type}</div>

        <div className="owner">
          <img
            alt="owner"
            src={`https://res.cloudinary.com/baudelaire/image/upload/w_200/v1575604233/focus-scene/scenes/${s}/user.png`}
          />
        </div>

        <div className="contact">
          <div className="contact-title">Contact</div>
          {data[s].contact.map(x => (
            <div className="link" key={x.type}>
              <a
                rel="noopener noreferrer"
                target={x.type == "web" ? "_blank" : ""}
                style={{ display: x.link ? "" : "none" }}
                href={getLink(x)}
              >
                <i className="material-icons-round">{x.type}</i>
                <span>{x.type}</span>
              </a>
            </div>
          ))}
        </div>

        <div className="about">
          <div className="about-title">About the location</div>
          {data[s].about}
        </div>
      </div>

      <Reviews scene={s} />

      <SceneNav />
    </S>
  );
};

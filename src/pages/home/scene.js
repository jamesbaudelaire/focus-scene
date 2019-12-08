import React, { useEffect, useState } from "react";
import { SceneNav } from "./sceneNav";

import { Gallery } from "./scene/gallery";
import { Reviews } from "./scene/reviews";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { data } from "../../data";
import { Info } from "ui/info";

import { User } from "ui/user";

const S = styled.div`
  font-size: 16px;
  .details {
    position: relative;
    margin: 20px;
    margin-top: 0;
  }

  .title {
    margin: 30px 0 10px 0;
    font-family: var(--font2);
    font-size: 18px;
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

  .about {
    .text {
      margin: 20px;
    }
  }

  .reviews {
    margin: 20px;
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

      <div className="details">
        <User data={data[s]} />
        <Info data={data[s]} />

        <div className="contact">
          <div className="title">Contact</div>
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
          <div className="title">About the location</div>
          <div className="text">{data[s].about}</div>
        </div>
      </div>

      <div className="reviews">
        <div className="title">Reviews</div>
        <Reviews scene={s} />
      </div>
      <SceneNav />
    </S>
  );
};

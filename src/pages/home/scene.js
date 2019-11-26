import React, { useEffect, useState } from "react";
import { SceneNav } from "./sceneNav";

import { Gallery } from "./gallery";

import styled from "styled-components";

const S = styled.div`
  .user {
    margin: 20px;
    img {
      border-radius: 50%;
      width: 80px;
      height: 80px;
      box-shadow: var(--shadow);
    }
    .name {
      font-weight: bold;
      font-family: var(--font2);
      padding: 0px 20px;
      font-size: 25px;
    }
    .user-type {
      border-radius: 30px;
      text-transform: uppercase;
      padding: 5px 10px;
      color: white;
      box-shadow: var(--shadow);
      display: inline-block;
      margin: 20px 10px 0 10px;
      font-size: 15px;
    }
  }

  .scene-page {
    font-family: var(--font2);
    font-size: 25px;
    margin: 0 20px 0px 20px;
  }
  .scene-type {
    font-style: italic;
    font-family: var(--font2);
    font-size: 20px;
    margin: 0 20px;
  }

  .scene-location {
    margin: 20px;

    i {
      font-size: 30px;
      color: red;
    }
  }

  .about,
  .contact {
    margin: 20px;
    .about-title,
    .contact-title {
      margin: 30px 0 10px 0;
      font-weight: bold;
      font-family: var(--font2);
    }
  }
`;

let user = {
  name: "Anne Marie",
  type: {
    "venue-owner": true,
    photographer: false
  }
};

export const Scene = ({ scene, close }) => {
  console.log(scene);
  return (
    <S className="scene-page">
      <Gallery />

      <div className="user">
        <img
          alt="user"
          className="user-img"
          src="https://res.cloudinary.com/baudelaire/image/upload/v1574749092/focus-scene/user.png"
        />
        <span className="name">{user.name}</span>
        <br />

        <span className="user-type" style={{ background: "var(--theme1)" }}>
          photographer
        </span>
        <span className="user-type" style={{ background: "var(--theme2)" }}>
          venue owner
        </span>
      </div>

      <div className="scene-page">Anne Marie Studios</div>

      <div className="scene-type">Studio</div>

      <div className="scene-location">523 Towson Ave, Fort Smith, Arkansas</div>

      <div className="about">
        <div className="about-title">About the location</div>
        This space is an endless opportunity for photos, making your vision come
        to reality.
      </div>

      <div className="contact">
        <div className="contact-title">Contact</div>
        <a
          style={{ color: "var(--theme3)" }}
          href="https://www.annemariesstudio.com/"
        >
          https://www.annemariesstudio.com/
        </a>
      </div>

      <SceneNav scene={scene} close={close} />
    </S>
  );
};

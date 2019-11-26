import React, { useEffect, useState } from "react";
import styled from "styled-components";

const S = styled.div`
  height: 200px;
  padding: 30px;
  padding-bottom: 0;

  img {
    width: 70%;
    opacity: 0.7;
    display: block;
    margin: 20px auto;
  }

  .socials {
    display: grid;
    width: 80%;
    grid-template-columns: 1fr 1fr 1fr;
    margin: auto;
    img {
      width: 50px;
    }
  }
`;

let socials = [
  {
    social: "facebook",
    link:
      "https://www.facebook.com/Focusscene-101811807962096/?modal=admin_todo_tour"
  },
  {
    social: "twitter",
    link: "https://twitter.com/FocusScene"
  },
  {
    social: "instagram",
    link: "https://www.instagram.com/focus.scene/"
  }
];

export const TopBar = () => {
  return (
    <S>
      <img src="https://res.cloudinary.com/baudelaire/image/upload/v1574747476/focus-scene/logo-title.png" />
      <div className="socials">
        {socials.map(x => (
          <a href={x.link}>
            <img
              src={`https://res.cloudinary.com/baudelaire/image/upload/v1574748108/focus-scene/social/${
                x.social
              }.png`}
            />
          </a>
        ))}
      </div>
      Find locations near you.
    </S>
  );
};
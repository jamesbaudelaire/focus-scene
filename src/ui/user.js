import React from "react";
import styled from "styled-components";

const S = styled.div`
  .owner {
    display: inline-block;
    img {
      height: 100%;
    }
    height: 70px;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: var(--shadow);
    width: 70px;
    right: 0px;
    top: 0;
  }
  .name {
    font-family: var(--font2);
    margin-left: 20px;
    line-height: 70px;
    vertical-align: top;
    font-size: 20px;
  }
`;

export const User = ({ data }) => {
  return (
    <S>
      <div className="owner">
        <img
          alt="owner"
          src={`https://res.cloudinary.com/baudelaire/image/upload/w_200/v1575604233/focus-scene/scenes/${
            data.url
          }/user.png`}
        />
      </div>
      <span className="name">{data.owner}</span>
    </S>
  );
};

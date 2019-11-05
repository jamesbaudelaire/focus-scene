import React, { useState, useEffect } from "react";
import styled from "styled-components";

const S = styled.div`
  opacity: 0;
  transition: 0.5s;
  transform: translate(20px, 20px);
  &.load {
    opacity: 1;
    transform: translatex(0px);
  }

  .user {
    margin: 20px;
    position: absolute;
    top: 0;
    left: 0;
    img {
      border-radius: 50%;
      width: 70px;
      box-shadow: var(--shadow);
    }
    .name {
      padding: 10px;
      font-size: 20px;
    }
  }
`;

let user = {
  name: "Jackie Rurosh"
};

export const Profile = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <S className={load ? "load" : undefined}>
      <div className="user">
        <img
          alt="user"
          className="user-img"
          src="https://randomuser.me/api/portraits/women/6.jpg"
        />
        <span className="name">{user.name}</span>
      </div>
    </S>
  );
};

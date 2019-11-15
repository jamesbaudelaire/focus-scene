import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const S = styled.div`
  border-radius: 30px 30px 0 0;
  z-index: 100;
  font-family: var(--font2);
  background: var(--theme1);
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;

  transition: 0.5s;
  transform: translatey(50px);

  &.load {
    transform: translatey(0);
  }

  div {
    color: white;
    padding: 10px;
    font-size: 12px;
    i {
      display: block;
      font-size: 24px;
      margin-bottom: 5px;
    }
  }

  div * {
    transition: 0.5s;
  }

  .active * {
    color: var(--theme2);
  }
`;

let pages = [
  {
    name: "scenes",
    location: "/",
    icon: "image_search"
  },
  {
    name: "bookmarks",
    location: "/saved",
    icon: "collections"
  },
  {
    name: "profile",
    location: "/profile",
    icon: "portrait"
  }
];

export const Nav = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <S className={load ? "load" : undefined}>
      {pages.map(x => (
        <NavLink key={x.name} exact to={x.location}>
          <div>
            <i className="material-icons-round">{x.icon}</i>
            {x.name}
          </div>
        </NavLink>
      ))}
    </S>
  );
};

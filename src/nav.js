import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const S = styled.div`
  border-radius: 30px 30px 0 0;
  font-family: var(--font2);
  background: black;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;

  opacity: 0;
  transition: 1s;
  transform: translatey(30px);

  &.load {
    opacity: 1;
    transform: translatey(0);
  }

  div {
    color: white;
    padding: 10px;
    font-size: 12px;
    i {
      display: block;
      font-size: 30px;
      margin-bottom: 5px;
    }
  }

  div * {
    transition: 0.5s;
  }

  .active * {
    color: red;
  }
`;

let pages = [
  {
    name: "scenes",
    location: "/",
    icon: "search"
  },
  {
    name: "collection",
    location: "/saved",
    icon: "favorite"
  },
  {
    name: "profile",
    location: "/profile",
    icon: "account_circle"
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
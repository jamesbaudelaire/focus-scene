import React, { useEffect, useState } from "react";
import styled from "styled-components";

const S = styled.div`
  overflow-x: scroll;
  border-radius: 30px 30px 0 0;
  font-family: var(--font2);
  background: var(--theme2);
  position: fixed;
  bottom: 0;
  padding-bottom: 52px;
  width: 100%;
  left: 0;
  white-space: nowrap;

  transition: 0.5s;
  transform: translatey(50px);

  &.load {
    transform: translatey(0);
  }

  div {
    color: white;
    margin: 9px 0 20px 10px;
    display: inline-block;
    font-size: 12px;
    text-transform: uppercase;
    border-radius: 30px;
    padding: 5px 10px;
    :first-child {
      margin-left: 30px;
    }
    :last-child {
      margin-right: 30px;
    }
    transition: 0.5s;
    &.selected {
      background: var(--theme1);
      color: white;
      box-shadow: var(--shadow);
    }
  }

  .active * {
    color: var(--theme2);
  }
`;

let types = [
  "studio",
  "mural",
  "business",
  "bar",
  "house",
  "garden",
  "patio",
  "museum"
];

export const FilterNav = ({ filterScene }) => {
  const [load, setLoad] = useState(false);

  const [type, setType] = useState(null);

  useEffect(() => {
    setLoad(true);
  }, []);

  useEffect(() => {
    if (type) {
      document.querySelector(".selected").scrollIntoView({
        behavior: "smooth",
        inline: "center"
      });
    }
  }, [type]);

  return (
    <S className={load ? "load" : undefined}>
      {types.map(x => (
        <div
          key={x}
          className={x == type ? "selected" : ""}
          onClick={() => {
            if (x == type) {
              setType(null);
            } else {
              setType(x);
            }
            filterScene(x);
          }}
        >
          {x}
        </div>
      ))}
    </S>
  );
};

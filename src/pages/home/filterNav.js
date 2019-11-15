import React, { useEffect, useState } from "react";
import styled from "styled-components";

const S = styled.div`
  overflow-x: scroll;
  border-radius: 30px 30px 0 0;
  z-index: 100;
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
    margin: 9px 0 20px 30px;
    display: inline-block;
    font-size: 12px;
    text-transform: uppercase;
    border-radius: 30px;
    padding: 5px 10px;
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
  "barn",
  "studio",
  "house",
  "garden",
  "bar",
  "cafe",
  "club",
  "loft",
  "gym"
];

export const FilterNav = () => {
  const [load, setLoad] = useState(false);

  const [type, setType] = useState();

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <S className={load ? "load" : undefined}>
      {types.map(x => (
        <div
          key={x}
          className={x == type ? "selected" : ""}
          onClick={() => {
            setType(x);
          }}
        >
          {x}
        </div>
      ))}
    </S>
  );
};

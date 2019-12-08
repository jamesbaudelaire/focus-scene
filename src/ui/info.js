import React from "react";
import { Stars } from "ui/stars";

import styled from "styled-components";

const S = styled.div`
  font-size: 18px;
  margin: 20px;
  .name {
    font-family: var(--font2);
  }
  .name,
  .price,
  .type {
    margin: 5px 0;
  }
  .price {
    color: var(--theme3);
  }
`;

export const Info = ({ data }) => {
  return (
    <S>
      <div className="name">{data.name}</div>
      <div className="price">{data.price}</div>
      <div className="type">{data.type}</div>
      <Stars data={data} />
    </S>
  );
};

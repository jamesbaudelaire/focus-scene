import React, { useEffect, useState } from "react";
import styled from "styled-components";

const S = styled.div`
  padding: 30px;
  padding-bottom: 10px;

  .title {
    font-size: 20px;
  }
`;

export const TopBar = () => {
  return (
    <S>
      <div className="title">Find locations near you.</div>
    </S>
  );
};

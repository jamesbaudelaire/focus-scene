import React from "react";
import styled from "styled-components";

const S = styled.div`
  position: relative;
  i {
    font-size: 18px;
  }
  .five-stars {
    position: absolute;
    bottom: 0px;
    z-index: -1;
    color: black;
  }
  .stars {
    color: var(--theme3);
  }
`;

export const Stars = ({ data }) => {
  return (
    <S>
      <div className="stars">
        {[...Array(data.stars)].map((s, i) => (
          <i key={i} className="material-icons-round">
            star
          </i>
        ))}
      </div>
      <div className="five-stars">
        {[...Array(5)].map((s, i) => (
          <i key={i} className="material-icons-round">
            star
          </i>
        ))}
      </div>
    </S>
  );
};

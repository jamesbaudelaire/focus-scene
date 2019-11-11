import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SceneNav } from "./sceneNav";

import { Gallery } from "./gallery";

const S = styled.div`
  opacity: 0;
  transition: 0.5s;
  transform: translatey(20px);
  &.load {
    opacity: 1;
    transform: translatey(0px);
  }

  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 200;
  background: white;
`;

export const Scene = ({ scene, close }) => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <S className={load ? "load" : undefined}>
      <Gallery />
      <div className="scene-page">{scene}</div>
      <SceneNav close={close} scene={scene} />
    </S>
  );
};

import React, { useEffect, useState } from "react";
import { SceneNav } from "./sceneNav";

import { Gallery } from "./gallery";

import styled from "styled-components";

const S = styled.div``;

export const Scene = ({ scene, close }) => {
  return (
    <S className="scene-page">
      <Gallery />
      <div className="scene-page">{scene}</div>
      <SceneNav scene={scene} close={close} />
    </S>
  );
};

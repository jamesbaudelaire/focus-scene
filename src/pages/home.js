import React, { useState, useEffect } from "react";

import { Scenes } from "./home/scenes";
import { Scene } from "./home/scene";
import { TopBar } from "./home/topBar";

import { FilterNav } from "./home/filterNav";

export const Home = ({ search, scene, scenes, close }) => {
  return (
    <>
      {!scene && <TopBar />}
      {scene ? (
        <Scene scene={scene} close={close} />
      ) : (
        <>
          <Scenes scenes={scenes} search={search} />
          <FilterNav />
        </>
      )}
    </>
  );
};

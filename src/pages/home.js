import React, { useState, useEffect } from "react";

import { Scenes } from "./home/scenes";
import { Scene } from "./home/scene";
import { TopBar } from "./home/topBar";

import { FilterNav } from "./home/filterNav";

import { useSelector } from "react-redux";

export const Home = () => {
  const s = useSelector(state => state.scene);

  return (
    <>
      {s == null && <TopBar />}
      {s ? (
        <Scene />
      ) : (
        <>
          <Scenes />
          <FilterNav />
        </>
      )}
    </>
  );
};

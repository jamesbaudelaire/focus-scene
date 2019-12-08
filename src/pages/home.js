import React, { useState } from "react";

import { Scenes } from "./home/scenes";
import { Scene } from "./home/scene";
import { TopBar } from "./home/topBar";

import { FilterNav } from "./home/filterNav";

import { useSelector } from "react-redux";

export const Home = () => {
  const scene = useSelector(state => state.scene);
  const [filterType, setFilterType] = useState(null);

  const filterScene = x => {
    if (x == filterType) {
      setFilterType(null);
    } else {
      setFilterType(x);
    }
  };

  return (
    <>
      {scene == null && <TopBar />}
      {scene ? (
        <Scene />
      ) : (
        <>
          <Scenes filterType={filterType} />
          <FilterNav filterScene={filterScene} />
        </>
      )}
    </>
  );
};

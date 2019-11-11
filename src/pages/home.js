import React, { useState, useEffect } from "react";

import { Scenes } from "./home/scenes";

import { FilterNav } from "./home/filterNav";

export const Home = ({ search, scenes }) => {
  return (
    <>
      <Scenes scenes={scenes} search={search} />
      <FilterNav />
    </>
  );
};

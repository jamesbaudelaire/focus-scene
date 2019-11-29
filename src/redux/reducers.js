import { combineReducers } from "redux";

import { LS } from "functions/LS";
LS.init();

const sceneReducer = (state = null, action) => {
  switch (action.type) {
    case "scene":
      return (state = action.data);
    case "close":
      return (state = null);
    default:
      return state;
  }
};

const darkReducer = (state = LS.data.dark, action) => {
  switch (action.type) {
    case "dark":
      LS.save({ dark: !state });
      return !state;
    default:
      return state;
  }
};

export const Reducers = combineReducers({
  scene: sceneReducer,
  dark: darkReducer
});

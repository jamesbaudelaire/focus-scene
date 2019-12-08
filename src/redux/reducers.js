import { combineReducers } from "redux";

import { LS } from "functions/LS";
LS.init();

const sceneReducer = (state = null, action) => {
  switch (action.type) {
    case "get":
      return (state = action.data);
    case "exit":
      return (state = null);
    default:
      return state;
  }
};

const darkReducer = (state = LS.data.dark, action) => {
  switch (action.type) {
    case "dark":
      return !state;
    default:
      return state;
  }
};

const bookmarksReducer = (state = LS.data.bookmarks, action) => {
  switch (action.type) {
    case "bookmark":
      if (state.includes(action.data)) {
        return state.filter(x => x !== action.data);
      } else {
        return [...state, action.data];
      }
    case "delete":
      return state.filter(x => x !== action.data);
    default:
      return state;
  }
};

export const Reducers = combineReducers({
  scene: sceneReducer,
  dark: darkReducer,
  bookmarks: bookmarksReducer
});

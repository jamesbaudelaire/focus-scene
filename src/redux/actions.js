export const getScene = x => {
  return {
    type: "get",
    data: x
  };
};

export const exitScene = () => {
  return {
    type: "exit"
  };
};

export const bookmarkScene = x => {
  return {
    type: "bookmark",
    data: x
  };
};

export const deleteBookmark = x => {
  return {
    type: "delete",
    data: x
  };
};

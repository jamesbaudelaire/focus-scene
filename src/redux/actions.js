export const scene = x => {
  return {
    type: "scene",
    data: x
  };
};

export const close = () => {
  return {
    type: "close"
  };
};

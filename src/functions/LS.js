let terminal = {
  dark: false,
  bookmarks: ["anne-marie-studio", "camille-walala"]
};

export const LS = {
  init() {
    this.name = "focus-scene";
    let data = JSON.parse(localStorage.getItem(this.name));
    if (data !== null) {
      this.data = data;
    } else {
      this.data = terminal;
      this.save(this.data);
    }
  },
  save(data) {
    localStorage.setItem(this.name, JSON.stringify(data));
  }
};

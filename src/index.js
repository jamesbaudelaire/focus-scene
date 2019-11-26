import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import { Loading } from "./loading";
import { Home } from "./pages/home";
import { Saved } from "./pages/saved";
import { Profile } from "./pages/profile";
import { Nav } from "./nav";
import { Info } from "./info";

const GS = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Montserrat|Roboto");
@import url("https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp");

:root{
--font1:'Montserrat';
--font2:'Roboto';
--shadow:0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
--theme1: #eb008c;
--theme2:#3f2367;
--theme3:#5ec8d8;
}


body{
  margin:0;
  padding:0;
  overscroll-behavior: contain;
  font-family:var(--font1);
  user-select:none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: rgb(100, 100, 100);
}

a{
  text-decoration:none;
}

.spacer{
  height:100px;
}

`;

let scenes = [
  {
    img: "",
    name: "Anne Marie Studios",
    url: "ann-marie-studios",
    type: "Studio",
    stars: 5,
    price: "$$/hr"
  },
  {
    img: "",
    name: "Fort Smith Coffee Co.",
    url: "fort-smith-coffee-co",
    type: "Business",
    stars: 4,
    price: "FREE"
  },
  {
    img: "",
    name: "The Johnsons",
    url: "the-johnsons",
    type: "Home",
    stars: 5,
    price: "$$/hr"
  },
  {
    img: "",
    name: "Kindred Barn",
    url: "kindred-barn",
    type: "Barn",
    stars: 4,
    price: "$$$/hr"
  },
  {
    img: "",
    name: "Camille Walala",
    url: "camille-walala",
    type: "Mural",
    stars: 5,
    price: "FREE"
  }
];

const App = () => {
  const [load, setLoad] = useState(true);

  const [info, setInfo] = useState(false);

  const [scene, setScene] = useState(null);

  const toggle = () => {
    setInfo(false);
  };

  const searchScene = x => {
    setScene(x);
  };

  const close = () => {
    setScene(null);
  };

  useEffect(() => {
    let search = window.location.search.substring(1);
    let filterdScenes = scenes.map(x => x.url);
    if (filterdScenes.includes(search)) {
      setScene(search);
      setLoad(false);
    } else {
      setTimeout(() => {
        setLoad(false);
        setInfo(true);
      }, 1800);
    }
  }, []);

  return (
    <>
      <GS />
      {load && <Loading />}

      {info && scene == null ? (
        <Info toggle={toggle} />
      ) : (
        <BrowserRouter>
          <Route path="/profile" component={Profile} />
          <Route path="/saved" component={Saved} />
          <Route
            exact
            path="/"
            render={props => (
              <Home
                search={searchScene}
                scene={scene}
                scenes={scenes}
                close={close}
              />
            )}
          />
          <div className="spacer" />
          <Nav />
        </BrowserRouter>
      )}
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

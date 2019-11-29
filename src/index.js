import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, css } from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import { Loading } from "./loading";
import { Home } from "./pages/home";
import { Saved } from "./pages/saved";
import { Profile } from "./pages/profile";
import { Nav } from "./nav";
import { Info } from "./info";
import { data } from "./data";

import { createStore } from "redux";
import { Provider } from "react-redux";

import { Reducers } from "./redux/reducers";
import { useSelector, useDispatch } from "react-redux";
import { scene } from "./redux/actions";

const store = createStore(Reducers);

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
  color: rgb(100, 100, 100);
  ${props =>
    props.dark &&
    css`
      background: rgb(30, 30, 30);
      color: rgb(200, 200, 200);
    `};
  transition:.5s;
  margin:0;
  padding:0;
  overscroll-behavior: contain;
  font-family:var(--font1);
  user-select:none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

a{
  text-decoration:none;
}

.spacer{
  height:100px;
}

`;

const App = () => {
  const [load, setLoad] = useState(true);

  const [info, setInfo] = useState(false);

  const [app, setApp] = useState(false);

  const dispatch = useDispatch();

  const toggle = () => {
    setInfo(false);
    setApp(true);
  };

  const dark = useSelector(state => state.dark);

  useEffect(() => {
    let search = window.location.search.substring(1);

    if (data[search]) {
      setLoad(false);
      setApp(true);
      dispatch(scene(search));
    } else {
      setTimeout(() => {
        setLoad(false);
        setInfo(true);
      }, 1800);
    }
  }, []);

  return (
    <>
      <GS dark={dark} />
      {load && <Loading />}

      {info && <Info toggle={toggle} />}

      {app && (
        <BrowserRouter>
          <Route path="/profile" component={Profile} />
          <Route path="/saved" component={Saved} />
          <Route exact path="/" component={Home} />
          <div className="spacer" />
          <Nav />
        </BrowserRouter>
      )}
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

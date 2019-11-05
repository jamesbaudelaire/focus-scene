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
--shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}


body{
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

  const [info, setInfo] = useState(true);

  const toggle = () => {
    setInfo(false);
  };

  useEffect(() => {
    //scene url
    // let x = window.location.search.substring(1);
    // console.log(x)

    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  return (
    <>
      <GS />
      {/* {load && <Loading />} */}

      {info ? (
        <Info toggle={toggle} />
      ) : (
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/saved" component={Saved} />

          <div className="spacer" />

          <Nav />
        </BrowserRouter>
      )}
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

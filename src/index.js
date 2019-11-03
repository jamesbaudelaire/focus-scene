import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

const GS = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Montserrat|Roboto");


:root{
--font1:'Montserrat';
--font2:'Roboto';
}

img{
  display:block;
  margin:auto;
}

div{
  font-size:30px;
  margin:20px auto;
  text-align:center;
}


body{
  font-family:var(--font1);

}



`



function App() {
  return (
    <>
    <GS/>
    <div className="App">
      <img alt="logo" src="https://res.cloudinary.com/baudelaire/image/upload/v1572818720/focus-scene/logo.png"/>
      <div>coming soon!</div>
          </div>
  </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

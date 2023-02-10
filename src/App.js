import React from "react";
import {
  Blog,
  Footer,
  Possibility,
  Features,
  Header,
  WhatGP3,
} from "./containers";
import { Brand, Cta, Navbar } from "./component";
import "./App.css";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGP3 />
    <Features />
    <Possibility />
    <Cta />
    <Blog />
    <Footer />
  </div>
);

export default App;

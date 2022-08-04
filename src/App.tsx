import React, { Fragment } from "react";
import './index.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import TableSismos from "./components/TableSismos";
import GraphicSismos from "./components/GraphicSismos";
import Hero from "./components/Hero";

function App(): JSX.Element {

  return (
    <Fragment>
      <NavBar/>
      <div className="container mx-auto my-3">
        <Hero/>
        <TableSismos/>
        <GraphicSismos/>
      </div>
      <Footer/>
    </Fragment>
  );
};

export default App;

import React from "react";
import {
  Footer,
  Blog,
  Features,
  Header,
  Possibility,
  ReadMore,
} from "./containers";
import { CTA, Navbar } from "./components";

const Home = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <ReadMore />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;

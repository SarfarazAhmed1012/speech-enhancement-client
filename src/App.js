import React from "react";
import {
  Footer,
  Blog,
  DenoiseVideo,
  Header,
  Possibility,
  WhatGPT3,
  Record,
  AboutUs,
  DenoiseBy1D,
} from "./containers";
import { Brand, CTA, Navbar } from "./components";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AudioUpload from "./components/audioUpload/AudioUpload";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="upload-video" element={<DenoiseVideo />} />
        <Route path="record-audio" element={<Record />} />
        <Route path="upload-audio" element={<AudioUpload />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="denoise-by-1d" element={<DenoiseBy1D />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

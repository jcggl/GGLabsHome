import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default (
  <BrowserRouter>
    <Routes>
      <Route path="/" />
      <Route path="/About" />
      {/* <Route path="/Technology" /> */}
      <Route path="/Partners" />
      <Route path="/Product" />
      <Route path="/Team" />
    </Routes>
  </BrowserRouter>
);

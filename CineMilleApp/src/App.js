import React from "react";
import { Route, Routes } from "react-router-dom";
import Container from "./Container";
import MovieDetail from "./MovieDetail";
import "./Style.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Container />} />
      <Route path="/detail/:id" element={<MovieDetail />} />
    </Routes>
  );
}

export default App;

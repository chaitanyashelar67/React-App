import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import "./style.css";
import { Header } from "./Components/header/header";




const App = () => {
  return (
    <>
     <Header />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

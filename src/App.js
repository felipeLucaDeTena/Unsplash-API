import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Albums from "./pages/albums";
import Favourites from "./pages/favourites";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/home/:id" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

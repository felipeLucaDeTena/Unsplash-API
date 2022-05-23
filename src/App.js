import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Albums from "./pages/albums";
import Favourites from "./pages/favourites";
import Home from "./pages/home";

function App() {
  const [data, setData] = useState("");
  const [sortType, setSortType] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="App">
      <Nav
        sortType={sortType}
        setSortType={setSortType}
        setData={setData}
        isSearching={isSearching}
      />
      <Routes>
        <Route path="/home/:id" element={<Home />} />
        <Route
          path="/home"
          element={
            <Home
              setData={setData}
              sortType={sortType}
              data={data}
              page="home"
              setIsSearching={setIsSearching}
            />
          }
        />
        <Route
          path="/favourites"
          element={
            <Favourites
              setData={setData}
              sortType={sortType}
              data={data}
              page="favourites"
              setIsSearching={setIsSearching}
            />
          }
        />
        <Route path="/albums" element={<Albums />} />
      </Routes>

      <Footer />
      <Toaster />
    </div>
  );
}

export default App;

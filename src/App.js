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
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState([]);

  return (
    <div className="App">
      <Nav
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortType={sortType}
        setSortType={setSortType}
        setData={setData}
      />
      <Routes>
        <Route path="/home/:id" element={<Home />} />
        <Route
          path="/home"
          element={
            <Home
              setData={setData}
              searchTerm={searchTerm}
              sortType={sortType}
              data={data}
              page="home"
            />
          }
        />
        <Route
          path="/favourites"
          element={
            <Favourites
              searchTerm={searchTerm}
              setData={setData}
              sortType={sortType}
              data={data}
              page="favourites"
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

import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Favourites from "./pages/favourites";
import Home from "./pages/home";

function App() {
  const [data, setData] = useState("");
  const [sortType, setSortType] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <Nav
        sortType={sortType}
        setSortType={setSortType}
        setData={setData}
        setSearchTerm={setSearchTerm}
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
              searchTerm={searchTerm}
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
              searchTerm={searchTerm}
            />
          }
        />
      </Routes>

      <Footer />
      <Toaster />
    </div>
  );
}

export default App;

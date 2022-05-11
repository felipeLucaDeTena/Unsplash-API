import React from "react";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;

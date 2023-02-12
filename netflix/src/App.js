import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ComponentNavbar from "./components/navbar";
import ComponentSubNav from "./components/subnavbar";

import Movies from "./components/firstgallery";
import MoviesDue from "./components/secondgallery";
import MoviesTre from "./components/thirdgallery";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="App">
        <ComponentNavbar />
        <ComponentSubNav />

        <h2>Trending Now</h2>
        <Movies />
        <h2>Star Wars Collection</h2>
        <MoviesDue />
        <h2>New Releases</h2>
        <MoviesTre />
        <Footer />
      </div>
    </>
  );
}

export default App;

import React from "react";
import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Home from "./components/Home";
import Favorites from "./pages/fav";
import NavBar from "./components/NavBar";
import {MovieProvider} from "./contexts/MovieContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return(
    <MovieProvider>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fav" element={<Favorites/>}/>
        </Routes>
      </main>
      </MovieProvider>
  );
}

export default App;
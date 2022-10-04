import React from "react";
// import { Link, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/detail/:id" element={<MovieDetail />} />
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;

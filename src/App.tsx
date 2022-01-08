import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import AddTeam from "./components/team/AddTeam";

class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="team/add" element={<AddTeam />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;

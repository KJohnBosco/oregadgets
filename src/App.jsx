import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";
function App() {
  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}></Route>
        <Route path="/products" element={<h1>Products Page</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { NavBar } from "./components/navigationbar/navigationbar.component";
import { HomePage } from "./pages/homepage/homepage.component";
import { ShopPage } from "./pages/shoppage/shoppage.component";
import { CartPage } from "./pages/cartpage/cartpage.component";
import { AboutPage } from "./pages/aboutpage/aboutpage.component";
import { PageNotFound } from "./pages/404page/404page.component";
import "./App.scss";
import { Footer } from "./components/footer/footer.component";
import { CategoryPage } from "./pages/categorypage/categorypage.component";
import { SignupSignuPage } from "./pages/signinsignuppage/signupsignuppage.component";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/shop/:categoryName" element={<CategoryPage />} />
        <Route path="/signin" element={<SignupSignuPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

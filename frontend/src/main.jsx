import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Terms from "./pages/Terms.jsx";
import PriceList from "./pages/PriceList.jsx";
import "./assets/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/terms" element={<Terms />} />
      <Route path="/pricelist" element={<PriceList />} />
      <Route path="*" element={<Navigate to="/pricelist" replace />} />
    </Routes>
  </BrowserRouter>
);

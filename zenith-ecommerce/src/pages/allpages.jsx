import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./homepage.jsx";
import BrasPage from "./BrasPage.jsx"; // ✅ import it


// Temporary placeholder pages (replace with real components later)

const PantiesPage = () => <h2 style={{ textAlign: "center" }}>Panties Page</h2>;
const SetsPage = () => <h2 style={{ textAlign: "center" }}>Sets Page</h2>;

function AllPages() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bras" element={<BrasPage />} />
      <Route path="/panties" element={<PantiesPage />} />
      <Route path="/sets" element={<SetsPage />} />
    </Routes>
  );
}

export default AllPages;

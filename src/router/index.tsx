import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Page2 } from "../pages/page2";
import { Layout } from "../components/Layout";
import { Search } from "../pages/Search";
import { SearchResults } from "../pages/SearchResult";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="search/:query" element={<SearchResults />} />
      </Route>
    </Routes>
  );
}

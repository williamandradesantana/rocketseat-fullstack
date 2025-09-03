import { Routes, Route } from "react-router";

import { Home } from "../pages/Home";
import { Layout } from "../components/Layout";
import { Products } from "../pages/Products";
import { NotFound } from "../pages/NotFound";
import { Details } from "../pages/Details";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Route>

      <Route path="/details/:id" element={<Details />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

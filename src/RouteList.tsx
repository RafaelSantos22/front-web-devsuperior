import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "components/Navbar";
import { Catalog } from "pages/Catalog";
import { Home } from "pages/Home";
import { Admin } from "pages/Admin";

export const RouteList = () => (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Catalog />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
);
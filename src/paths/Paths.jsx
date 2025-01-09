import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductListingPage from "../pages/ProductListingPage";
import ProductDetail from "../pages/ProductDetail";
import ProductViewPage from "../pages/ProductViewPage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyProfile from "../pages/MyProfile";
import Orders from "../pages/Orders";
import PageLayout from "../pages/PageLayout";
import Category from "../pages/Category";

const Paths = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PageLayout />} >
                    <Route path="/home" element={<Home />} />
                    <Route path="/produtos" element={<ProductListingPage />} />
                    <Route path="/productdetail" element={<ProductDetail />} />
                    <Route path="/produto/:id" element={<ProductViewPage />} />
                    <Route path="/categorias" element={<Category />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/myprofile" element={<MyProfile />} />
                    <Route path="/pedidos" element={<Orders />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default Paths;
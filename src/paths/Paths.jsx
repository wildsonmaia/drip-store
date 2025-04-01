import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductListingPage from "../pages/ProductListingPage";
import ProductDetail from "../pages/ProductDetail";
import ProductViewPage from "../pages/ProductViewPage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyProfile from "../pages/MyProfile";
import OrdersPage from "../pages/OrdersPage";
import PageLayout from "../pages/PageLayout";
import Category from "../pages/Category";
import PaymentPage from "../pages/PaymentPage";
import PagamentoSucesso from "../pages/PagamentoSucesso";
import SignUpForm from "../pages/SignUpForm";

const Paths = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PageLayout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/produtos" element={<ProductListingPage />} />
                    <Route path="/productdetail" element={<ProductDetail />} />
                    <Route path="/produto/:id" element={<ProductViewPage />} />
                    <Route path="/categorias" element={<Category />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signupform" element={<SignUpForm />} />
                    <Route path="/myprofile" element={<MyProfile />} />
                    <Route path="/pedidos" element={<OrdersPage />} />
                    <Route path="/pagamento" element={<PaymentPage />} />
                    <Route path="/pagamentosucesso" element={<PagamentoSucesso />} />

                </Route>
            </Routes>
        </Router>
    );
}

export default Paths;
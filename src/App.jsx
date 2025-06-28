import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import ForgetPassword from './components/ForgetPassword';
import Home from './pages/Home';
import CartPage from './components/CartPage';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import CheckOut from './components/CheckOut';
import ProductDetail from './components/ProductDetail';
import WishList from './components/WishList';
import BackToTop from './components/common/BackToTop'

import Lenis from 'lenis'
const lenis = new Lenis({
  autoRaf: true,
});

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const location = useLocation();
  const hideHeaderFooterRoutes = ['/login', '/signup', '/forgetpassword'];

  return (
    <>
      {!hideHeaderFooterRoutes.includes(location.pathname) && <Header />}

      <Routes>
        <Route index element={<Navigate to={isLoggedIn ? '/home' : '/login'} />} />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/home" /> : <LoginPage />}
        />
        <Route
          path="/signup"
          element={isLoggedIn ? <Navigate to="/home" /> : <SignUpPage />}
        />
        <Route
          path="/forgetpassword"
          element={isLoggedIn ? <Navigate to="/home" /> : <ForgetPassword />}
        />
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/cart"
          element={isLoggedIn ? <CartPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/productdetails/:slug"
          element={isLoggedIn ? <ProductDetail /> : <Navigate to="/login" />}
        />
        <Route
          path="/checkout"
          element={isLoggedIn ? <CheckOut /> : <Navigate to="/login" />}
        />
        <Route
          path="/wishlist"
          element={isLoggedIn ? <WishList /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to={isLoggedIn ? "/home" : "/login"} />} />
      </Routes>
      {!hideHeaderFooterRoutes.includes(location.pathname) && <Footer />}
      <BackToTop />
    </>
  );
}

export default App;

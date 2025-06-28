import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import ForgetPassword from './components/ForgetPassword';
import Home from './pages/Home';
import CartPage from './components/CartPage';
import CheckOut from './components/CheckOut';
import ProductDetail from './components/ProductDetail';
import WishList from './components/WishList';
import BackToTop from './components/common/BackToTop';

import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

function App() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const hideHeaderFooterRoutes = ['/login', '/signup', '/forgetpassword'];

  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (location.pathname.startsWith("/productdetails/") && lenisRef.current) {
      lenisRef.current.scrollTo(0);
    }
  }, [location.pathname]);

  return (
    <>
      {!hideHeaderFooterRoutes.includes(location.pathname) && <Header />}

      <Routes>
        <Route index element={<Navigate to={isLoggedIn ? '/home' : '/login'} />} />
        <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <LoginPage />} />
        <Route path="/signup" element={isLoggedIn ? <Navigate to="/home" /> : <SignUpPage />} />
        <Route path="/forgetpassword" element={isLoggedIn ? <Navigate to="/home" /> : <ForgetPassword />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/cart" element={isLoggedIn ? <CartPage /> : <Navigate to="/login" />} />
        <Route path="/productdetails/:slug" element={isLoggedIn ? <ProductDetail /> : <Navigate to="/login" />} />
        <Route path="/checkout" element={isLoggedIn ? <CheckOut /> : <Navigate to="/login" />} />
        <Route path="/wishlist" element={isLoggedIn ? <WishList /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to={isLoggedIn ? "/home" : "/login"} />} />
      </Routes>

      {!hideHeaderFooterRoutes.includes(location.pathname) && <Footer />}
      <BackToTop />
    </>
  );
}

export default App;

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import ForgetPassword from './components/ForgetPassword';
import Home from './pages/Home';
import CartPage from './components/CartPage';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

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
        <Route path="*" element={<Navigate to={isLoggedIn ? "/home" : "/login"} />} />
      </Routes>
      {!hideHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;

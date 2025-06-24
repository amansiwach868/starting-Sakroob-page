import './App.css';
import Header from './components/Header';
import LoginUp from './pages/LoginUp';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <>
      {!isLoggedIn && <LoginUp />}
        {isLoggedIn && (
        <>
          <Header />
          
          <Home />
          <Footer/>
        </>
      )}
    </>
  );
}

export default App;

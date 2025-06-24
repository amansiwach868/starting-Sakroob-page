import './App.css';
import Header from './components/Header';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <>
      {!isLoggedIn && <Login />}
      {isLoggedIn && (
        <>
          <Header />
          <Home />
        </>
      )}
    </>
  );
}

export default App;

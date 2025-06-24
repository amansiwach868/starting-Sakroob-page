import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import Login from './pages/login';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Login />
      
    </>
  )
}

export default App

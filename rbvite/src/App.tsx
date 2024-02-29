import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Nav } from './components/Nav';
import { useSession } from './contexts/session.context';

import { useEffect } from 'react';
import { Albums } from './components/Albums';

function App() {
  const { session } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session.user) {
      navigate('/');
    }
  }, [session.user, navigate]);

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/list' element={<Albums />} />
      </Routes>
    </>
  );
}

export default App;

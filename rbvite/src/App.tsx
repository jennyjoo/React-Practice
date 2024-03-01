import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Nav } from './components/Nav';
import { SessionProvider } from './contexts/session.context';

import { Albums } from './components/Albums';
import { AlbumDetail } from './components/AlbumDetail';

function App() {
  return (
    <>
      <SessionProvider ref={null}>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/albums' element={<Albums />} />
          <Route path='/albums/:albumId' element={<AlbumDetail />} />
        </Routes>
      </SessionProvider>
    </>
  );
}

export default App;

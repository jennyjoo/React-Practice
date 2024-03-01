import { Routes, Route } from 'react-router-dom';
import { SessionProvider } from './contexts/session.context';

import { Home } from './components/Home';
import { Nav } from './Nav';
import { Albums } from './components/Albums';
import { AlbumDetail } from './components/AlbumDetail';
import './App.css';
import { RequireAuth } from './components/RequireAuth';

function App() {
  return (
    <>
      <SessionProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path=':id'
            element={
              <RequireAuth>
                <Albums />
              </RequireAuth>
            }
          />
          <Route path='/albums/detail/:albumId' element={<AlbumDetail />} />
        </Routes>
      </SessionProvider>
    </>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import { SessionProvider } from './contexts/session.context';

import { Home } from './components/Home';
import { Nav } from './Nav';
import { Albums } from './components/Albums';
import { AlbumDetail } from './components/AlbumDetail';
import './App.css';
import { RequireAuth } from './components/RequireAuth';
import { NotFound } from './components/ui/NotFound';
import { Login } from './components/Login';

function App() {
  return (
    <>
      <SessionProvider>
        <div className='container max-w-4xl mx-auto'>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route
              path=':id'
              element={
                <RequireAuth>
                  <Albums />
                </RequireAuth>
              }
            />
            {/* <Route path='/albums/detail/:albumId' element={<AlbumDetail />} /> */}
            <Route
              path='/albums/detail/:albumId'
              element={
                <RequireAuth>
                  <AlbumDetail />
                </RequireAuth>
              }
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </SessionProvider>
    </>
  );
}

export default App;

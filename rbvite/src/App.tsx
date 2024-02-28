import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { List } from './components/List';
import { Nav } from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <div className='container flex justify-center items-center h-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/list' element={<List />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

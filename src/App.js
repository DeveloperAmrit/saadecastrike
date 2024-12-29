import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
        <Navbar />
        <div className="w-ful bg-gray-100">
          <div className="max-w-7xl w-11/12 mx-auto px-4 py-4 flex flex-col">
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
        </div>
        <Footer />
    </>
  );
}

export default App;

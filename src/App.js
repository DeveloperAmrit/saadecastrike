import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <div className="w-full absolute bg-gray-100">
        <div className="max-w-7xl w-11/12 mx-auto px-4 py-4 flex flex-col">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;

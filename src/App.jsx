import "./css/App.css";
import Favorites from './pages/Favorites'
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
import { MovieProvider } from "./contexts/MovieContexts";

function App() {

  return (
    <MovieProvider>
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </MovieProvider>
  );
}

export default App

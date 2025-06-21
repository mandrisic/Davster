import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import StartScreen from "./components/Start/Start";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import EndScreen from "./components/End/End";
import './index.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<StartScreen />} />
        <Route path="/game" element={<MusicPlayer />} />
        <Route path="/end" element={<EndScreen />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="appContainer">
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
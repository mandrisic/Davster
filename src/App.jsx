import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartScreen from "./components/Start/Start"
import MusicPlayer from "./components/MusicPlayer/MusicPlayer"
import EndScreen from "./components/End/End"


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/game" element={<MusicPlayer />} />
        <Route path="/end" element={<EndScreen />} />
      </Routes>
    </Router>
  )
}

export default App

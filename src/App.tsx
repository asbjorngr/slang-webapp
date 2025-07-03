import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './screens/WelcomeScreen';
import AudioIntroScreen from './screens/AudioIntroScreen';
import TipsScreen from './screens/TipsScreen';
import EnableRecordingScreen from './screens/EnableRecordingScreen';
import GetReadyScreen from './screens/GetReadyScreen';
import QuestionScreen from './screens/QuestionScreen';
import CompletedScreen from './screens/CompletedScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import FinalScreen from './screens/FinalScreen';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/audio-intro" element={<AudioIntroScreen />} />
          <Route path="/tips" element={<TipsScreen />} />
          <Route path="/enable-recording" element={<EnableRecordingScreen />} />
          <Route path="/get-ready" element={<GetReadyScreen />} />
          <Route path="/questions/:number" element={<QuestionScreen />} />
          <Route path="/completed" element={<CompletedScreen />} />
          <Route path="/registration" element={<RegistrationScreen />} />
          <Route path="/final" element={<FinalScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

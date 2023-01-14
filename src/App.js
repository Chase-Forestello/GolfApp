import './App.css'; // import the css file
import PlayerNames from './components/PlayerNames'; // import the start screen component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // import the router
import Header from './components/Header'; // import the header component
import Home from './components/Home'; // import the home component
import Scorecard from './components/Scorecard'; // import the home component

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<Home />} /> {/* set the start screen as the default screen (course selection) */}
          <Route path="/golf-app" element={<Home />} /> {/* set the start screen as the default screen (course selection) */}
          <Route path="/golf-app/start" element={<PlayerNames/>} />
          <Route path="/golf-app/home" element={<Home />} />
          <Route path="/golf-app/scorecard" element={<Scorecard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

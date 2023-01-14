import './App.css'; // import the css file
import PlayerNames from './components/PlayerNames'; // import the start screen component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // import the router
import Header from './components/Header'; // import the header component
import Home from './components/Home'; // import the home component

function App() {
  let players = []; // create an empty array to store the player names
  let course = ""; // create an empty string to store the course name
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<PlayerNames />} /> {/* set the start screen as the default screen (course selection) */}
          <Route path="/golf-app" element={<PlayerNames />} /> {/* set the start screen as the default screen (course selection) */}
          <Route path="/golf-app/start" element={<PlayerNames players="1" />} />
          <Route path="/golf-app/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

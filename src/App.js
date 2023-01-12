import './App.css'; // import the css file
import StartScreen from './components/StartScreen'; // import the start screen component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // import the router
import Header from './components/Header'; // import the header component
import Home from './components/Home'; // import the home component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/golf-app/start" element={<StartScreen />} />
          <Route path="/golf-app/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

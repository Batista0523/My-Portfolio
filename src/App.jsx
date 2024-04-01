import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Contact from "./Containers/Contacts/Contact";
import About from "./Containers/About/About";
import NavBar from "./Components/NavBar";
import "./App.css";
import Projects from "./Containers/Projects/Projects";

function App() {
  return (
    <div className="app-main">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./Pages/Layout";
import Intro from "./Pages/Intro";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import Projects from "./Pages/Projects";
//import './App.css';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="intro" element={<Intro />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
    
  )
   
}

export default App
//why link rel attribute requires noopener
//https://web.dev/external-anchors-use-rel-noopener/
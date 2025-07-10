import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./Pages/Layout";
import Intro from "./Pages/Intro";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import Projects from "./Pages/Projects";
import './App.css';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Intro />} />
          <Route path="Intro" element={<Intro />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  )
   
}

export default App
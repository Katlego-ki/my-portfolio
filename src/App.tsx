import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./Pages/Layout"
import Overview from "./Pages/Overview"
import TechStack from "./Pages/TechStack"
import Contact from "./Pages/Contact"
import NoPage from "./Pages/NoPage"
import Projects from "./Pages/Projects"
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="techstack" element={<TechStack />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects " element={<Projects />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
   
}

export default App
//why link rel attribute requires noopener
//https://web.dev/external-anchors-use-rel-noopener/
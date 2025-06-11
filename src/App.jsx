import { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";                        
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
       
        <ScrollToTop />
      
        <Routes>
          <Route path="/" element={<Home />} />
        
          <Route path="/project" element={<Projects />} />
         
          <Route path="/about" element={<About />} />
          
          <Route path="/resume" element={<Resume />} />
        
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
       
        <Footer />
      </div>
    </Router>
  );
}

export default App;

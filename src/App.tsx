import { useState, useEffect } from "react";
import Preloader from "./pages/components/Pre";
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./pages/components/ScrollToTop";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";

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

      <div className="App min-h-screen flex flex-col" id={load ? "no-scroll" : "scroll"}>
        <Navbar />

        <ScrollToTop />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/project" element={<Projects />} />

            <Route path="/about" element={<About />} />

            <Route path="/resume" element={<Resume />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

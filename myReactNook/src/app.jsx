import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Navigation from './components/navigation';
import Footer from './components/footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import { useLocation } from 'react-router-dom';


function App() { // App component
  const location = useLocation();
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
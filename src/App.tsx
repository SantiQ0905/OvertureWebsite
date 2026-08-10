import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Robots } from './pages/Robots';
import { RobotDetail } from './pages/RobotDetail';
import { Sponsors } from './pages/Sponsors';
import { News } from './pages/News';
import { JoinUs } from './pages/JoinUs';
import { NotFound } from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/robots" element={<Robots />} />
          <Route path="/robots/:slug" element={<RobotDetail />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/news" element={<News />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;

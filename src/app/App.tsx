import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import CybersecurityLab from './components/CybersecurityLab';
import FarukPortfolio from './components/FarukPortfolio';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<CybersecurityLab />} />
        <Route path="/faruk-kazi" element={<FarukPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}
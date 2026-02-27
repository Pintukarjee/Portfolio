import { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { useMousePosition } from './hooks/useMousePosition';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

import './index.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, t, toggleTheme } = useTheme();
  const mouse = useMousePosition();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', background: t.bg, color: t.text, fontFamily: "'IBM Plex Mono', 'Courier New', monospace", transition: 'background 0.3s, color 0.3s', position: 'relative' }}>

      {/* Injected keyframes + scrollbar color */}
      <style>{`
        @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes gridMove { from{background-position:0 0} to{background-position:40px 40px} }
        ::-webkit-scrollbar-thumb { background: ${t.accent}; }
      `}</style>

      {/* Animated grid */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: `linear-gradient(${t.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${t.gridLine} 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        animation: 'gridMove 20s linear infinite',
      }} />

      {/* Mouse glow */}
      <div style={{
        position: 'fixed', width: 400, height: 400, borderRadius: '50%',
        background: t.glowBg, pointerEvents: 'none', zIndex: 1,
        left: mouse.x, top: mouse.y,
        transform: 'translate(-50%, -50%)',
        transition: 'left 0.08s, top 0.08s',
      }} />

      {/* App content */}
      <NavBar activeSection={activeSection} scrollTo={scrollTo} isDark={isDark} toggleTheme={toggleTheme} t={t} />

      <main style={{ position: 'relative', zIndex: 2 }}>
        <Hero scrollTo={scrollTo} t={t} />
        <About t={t} />
        <Experience t={t} />
        <Skills t={t} />
        <Projects t={t} />
        <Contact t={t} />
      </main>

      <Footer t={t} />
      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        id="scrollTopBtn"
        title="Back to top"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: 44,
          height: 44,
          borderRadius: '50%',
          background: t.accent,
          color: t.btnText,
          border: 'none',
          fontSize: '1.1rem',
          cursor: 'pointer',
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `0 0 20px ${t.photoGlow}`,
          transition: 'all 0.3s',
          opacity: scrollY > 300 ? 1 : 0,
          pointerEvents: scrollY > 300 ? 'auto' : 'none',
          transform: scrollY > 300 ? 'translateY(0)' : 'translateY(10px)',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
        onMouseLeave={e => e.currentTarget.style.transform = scrollY > 300 ? 'translateY(0)' : 'translateY(10px)'}
      >
        ↑
      </button>
    </div>
  );
}
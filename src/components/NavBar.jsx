import { useState } from 'react';
import NavLink from './NavLink';
import ThemeToggle from './ThemeToggle';
import { navSections } from '../data/portfolioData';

export default function NavBar({ activeSection, scrollTo, isDark, toggleTheme, t }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (section) => {
    scrollTo(section);
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── Desktop & Mobile Navbar ── */}
      <nav style={{
        position:     'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display:      'flex', justifyContent: 'space-between', alignItems: 'center',
        padding:      '1rem clamp(1.5rem, 6vw, 6rem)',
        background:   t.navBg, backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${t.accentBorderNav}`,
        transition:   'background 0.3s',
      }}>
        {/* Logo */}
        <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.1rem', fontWeight: 800, color: t.accent }}>
          PK<span style={{ color: t.text }}>.</span>
        </span>

        {/* Desktop links — hidden on mobile via CSS class */}
        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {navSections.map(s => (
            <NavLink key={s} active={activeSection === s} onClick={e => { e.preventDefault(); handleClick(s); }} t={t}>
              {s}
            </NavLink>
          ))}
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} t={t} />
        </div>

        {/* Mobile controls */}
        <div className="nav-mobile-controls" style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }}>
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} t={t} />
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            style={{
              background: 'transparent', border: `1px solid ${t.accentBorder}`,
              cursor: 'pointer', padding: '0.45rem 0.6rem',
              display: 'flex', flexDirection: 'column', gap: '5px', borderRadius: '2px',
            }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: 22, height: 2, transition: 'all 0.3s',
                background: menuOpen ? t.accent : t.textMuted,
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(5px,5px)'
                  : i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* ── Mobile Dropdown ── */}
      <div
        className="nav-mobile-menu"
        style={{
          display:    'none',
          position:   'fixed', top: '62px', left: 0, right: 0, zIndex: 99,
          background: t.navBg, backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${t.accentBorderNav}`,
          flexDirection: 'column',
          padding:    menuOpen ? '1.5rem' : '0 1.5rem',
          gap:        '1.4rem',
          maxHeight:  menuOpen ? '400px' : '0',
          overflow:   'hidden',
          transition: 'max-height 0.35s ease, padding 0.3s ease',
        }}
      >
        {navSections.map(s => (
          <NavLink key={s} active={activeSection === s} onClick={e => { e.preventDefault(); handleClick(s); }} t={t}>
            {s}
          </NavLink>
        ))}
      </div>

      {/* Overlay to close on outside click */}
      {menuOpen && (
        <div onClick={() => setMenuOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 98 }} />
      )}
    </>
  );
}
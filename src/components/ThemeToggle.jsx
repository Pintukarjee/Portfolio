export default function ThemeToggle({ isDark, onToggle, t }) {
  return (
    <button
      onClick={onToggle}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      style={{
        display:     'flex',
        alignItems:  'center',
        gap:         '0.4rem',
        padding:     '0.35rem 0.8rem',
        background:  t.toggleBg,
        border:      `1px solid ${t.toggleBorder}`,
        borderRadius:'2px',
        cursor:      'pointer',
        fontFamily:  "'IBM Plex Mono', monospace",
        fontSize:    '0.7rem',
        letterSpacing:'0.1em',
        color:       t.accent,
        textTransform:'uppercase',
        fontWeight:  600,
        transition:  'background 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.background = t.accentBorder)}
      onMouseLeave={e => (e.currentTarget.style.background = t.toggleBg)}
    >
      <span>{isDark ? '☀' : '◑'}</span>
      {isDark ? 'Light' : 'Dark'}
    </button>
  );
}
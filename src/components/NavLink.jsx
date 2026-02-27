export default function NavLink({ href = '#', children, active, onClick, t }) {
  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        color:          active ? t.accent : t.textMuted,
        textDecoration: 'none',
        fontSize:       '0.78rem',
        letterSpacing:  '0.15em',
        textTransform:  'uppercase',
        fontWeight:     600,
        transition:     'color 0.2s',
        cursor:         'pointer',
      }}
      onMouseEnter={e => (e.target.style.color = t.accent)}
      onMouseLeave={e => (e.target.style.color = active ? t.accent : t.textMuted)}
    >
      {children}
    </a>
  );
}
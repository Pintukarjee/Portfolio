export default function SectionLabel({ num, title, t }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
      <span style={{ color: t.accent, fontSize: '0.7rem', letterSpacing: '0.2em', whiteSpace: 'nowrap' }}>
        {num} ──
      </span>
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: t.white }}>
        {title}
      </h2>
    </div>
  );
}
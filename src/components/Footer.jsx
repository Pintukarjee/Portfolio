export default function Footer({ t }) {
  return (
    <footer style={{
      position:   'relative', zIndex: 2,
      borderTop:  `1px solid ${t.accentBorderSub}`,
      padding:    '1.5rem clamp(1.5rem, 6vw, 6rem)',
      display:    'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap:   'wrap', gap: '0.5rem',
    }}>
      <span style={{ color: t.textDeep, fontSize: '0.75rem' }}>
        © {new Date().getFullYear()} Pintu Karjee
      </span>
      <span style={{ color: t.textDeep, fontSize: '0.75rem' }}>
        Java Developer · Bengaluru
      </span>
    </footer>
  );
}
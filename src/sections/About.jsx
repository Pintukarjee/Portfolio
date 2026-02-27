import SectionLabel from '../components/SectionLabel';
import resume from '../assets/Pintu_KarjeeCV.pdf';

const rows = [
  { label: 'Role', value: 'Java Developer' },
  { label: 'Experience', value: '2.6 Years' },
  { label: 'Location', value: 'Bengaluru, India' },
  { label: 'Degree', value: 'B.Tech CSE (2021)' },
  { label: 'University', value: 'Centurion University Of Technology And Management, Paralakhemundi (Odisha)' },
  { label: 'CGPA', value: '7.3 / 10' },
  { label: 'Status', value: 'Open to Opportunities', highlight: true },
];

export default function About({ t }) {
  return (
    <section id="about" className="section-pad" style={{ position: 'relative', zIndex: 2 }}>
      <SectionLabel num="01" title="About Me" t={t} />

      <div className="about-grid">
        {/* Bio */}
        <div>
          <p style={{ color: t.textMuted, lineHeight: 1.9, fontSize: '0.93rem', marginBottom: '1rem' }}>
            I'm a Java Developer with 2.6 years of hands-on experience in Java/J2EE development —
            covering design, implementation, integration, testing, and maintenance of production-grade applications.
          </p>
          <p style={{ color: t.textMuted, lineHeight: 1.9, fontSize: '0.93rem', marginBottom: '1.5rem' }}>
            I specialize in building Spring Boot microservices, RESTful APIs, and scalable backend
            systems — developed through university projects, personal builds, and continuous
            self-learning in my free time.
          </p>
          <a
            href={resume}
            download="Pintu_Karjee_Resume.pdf"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.55rem 1.2rem', background: 'transparent',
              color: t.accent, border: `1px solid ${t.accent}`,
              fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = t.accentDim; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
          >
            ↓ Download Resume
          </a>
        </div>

        {/* Info rows */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {rows.map(({ label, value, highlight }) => (
            <div key={label} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '0.6rem 0', borderBottom: `1px solid ${t.accentBorderSub}`, gap: '1rem',
            }}>
              <span style={{ color: t.textFaint, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', flexShrink: 0 }}>
                {label}
              </span>
              <span style={{ color: highlight ? t.accent : t.text, fontSize: '0.82rem', fontWeight: highlight ? 600 : 400, textAlign: 'right' }}>
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
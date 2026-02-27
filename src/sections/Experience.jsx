import SectionLabel from '../components/SectionLabel';
import { experience } from '../data/portfolioData';

export default function Experience({ t }) {
  return (
    <section id="experience" className="section-pad" style={{ position: 'relative', zIndex: 2 }}>
      <SectionLabel num="02" title="Experience" t={t} />

      <div style={{ marginTop: '3rem', maxWidth: 900, display: 'flex', flexDirection: 'column' }}>
        {experience.map((job, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: '1.5rem', paddingBottom: i < experience.length - 1 ? '2.5rem' : 0, position: 'relative' }}>

            {/* Timeline line */}
            {i < experience.length - 1 && (
              <div style={{ position: 'absolute', left: 9, top: 20, bottom: 0, width: 2, background: t.tlLine }} />
            )}

            {/* Dot */}
            <div style={{
              width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
              background: t.bg, border: `2px solid ${t.accent}`, zIndex: 1,
              marginTop: 2, boxShadow: `0 0 10px ${t.photoGlow}`,
            }} />

            {/* Card */}
            <div
              style={{
                background: t.cardBg, border: `1px solid ${t.accentBorderFaint}`,
                padding: 'clamp(1rem, 3vw, 1.8rem)', backdropFilter: 'blur(4px)',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = t.accent)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = t.accentBorderFaint)}
            >
              {/* Header */}
              <div className="tl-header">
                <div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", color: t.white, fontSize: '1.05rem', fontWeight: 700 }}>
                    {job.role}
                  </h3>
                  <p style={{ color: t.accent, fontSize: '0.8rem', marginTop: '0.25rem' }}>
                    {job.company} — {job.location}
                  </p>
                </div>
                <span style={{
                  color: t.textFaint, fontSize: '0.72rem', letterSpacing: '0.1em',
                  border: `1px solid ${t.accentBorderSub}`, padding: '0.2rem 0.7rem',
                  whiteSpace: 'nowrap', flexShrink: 0, alignSelf: 'flex-start',
                }}>
                  {job.period}
                </span>
              </div>

              {/* Points */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '1.2rem' }}>
                {job.points.map((pt, j) => (
                  <li key={j} style={{ color: t.textMuted, fontSize: '0.83rem', lineHeight: 1.7, paddingLeft: '1.2rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: t.accent }}>›</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
import SectionLabel from '../components/SectionLabel';
import { projects } from '../data/portfolioData';

export default function Projects({ t }) {
  return (
    <section id="projects" className="section-pad" style={{ position: 'relative', zIndex: 2 }}>
      <SectionLabel num="04" title="Projects" t={t} />

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div
            key={i}
            style={{
              background: t.cardBg, border: `1px solid ${t.accentBorderFaint}`,
              padding: '2rem', backdropFilter: 'blur(4px)', transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = t.accent; e.currentTarget.style.transform = 'translateY(-4px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = t.accentBorderFaint; e.currentTarget.style.transform = 'none'; }}
          >
            <div style={{ color: t.accent, fontSize: '0.7rem', letterSpacing: '0.2em', marginBottom: '1rem' }}>
              ◆ PROJECT_{String(i + 1).padStart(2, '0')}
            </div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", color: t.white, fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              {p.title}
            </h3>
            <p style={{ color: t.textDim, fontSize: '0.83rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {p.desc}
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {p.tags.map(tag => (
                <span key={tag} style={{
                  padding: '0.2rem 0.55rem', fontSize: '0.65rem', letterSpacing: '0.1em',
                  color: t.accent, border: `1px solid ${t.accentBorder}`, background: t.accentDim,
                  fontFamily: "'IBM Plex Mono', monospace",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
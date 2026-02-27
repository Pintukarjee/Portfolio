import SectionLabel from '../components/SectionLabel';
import { skills } from '../data/portfolioData';

const groups = [
  { label: 'Backend',           key: 'backend'  },
  { label: 'Frontend',          key: 'frontend' },
  { label: 'Database & Cloud',  key: 'database' },
  { label: 'Tools & Practices', key: 'tools'    },
];

function Chip({ label, t }) {
  return (
    <span
      style={{
        padding: '0.45rem 0.9rem', border: `1px solid ${t.accentBorder}`,
        color: t.textMuted, fontSize: '0.78rem', background: t.cardBg,
        fontFamily: "'IBM Plex Mono', monospace", transition: 'all 0.2s', cursor: 'default',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = t.accent; e.currentTarget.style.color = t.btnText; e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={e => { e.currentTarget.style.background = t.cardBg; e.currentTarget.style.color = t.textMuted; e.currentTarget.style.transform = 'none'; }}
    >
      {label}
    </span>
  );
}

export default function Skills({ t }) {
  return (
    <section id="skills" className="section-pad" style={{ position: 'relative', zIndex: 2 }}>
      <SectionLabel num="03" title="Tech Stack" t={t} />

      <div className="skills-grid">
        {groups.map(({ label, key }) => (
          <div key={key}>
            <p style={{ color: t.textFaint, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
              / {label}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
              {skills[key].map(s => <Chip key={s} label={s} t={t} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
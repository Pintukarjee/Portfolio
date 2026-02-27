import SectionLabel from '../components/SectionLabel';
import { contactLinks } from '../data/portfolioData';

export default function Contact({ t }) {
  return (
    <section id="contact" className="section-pad-contact" style={{ position: 'relative', zIndex: 2 }}>
      <SectionLabel num="05" title="Get In Touch" t={t} />

      <div style={{ marginTop: '3rem', maxWidth: 600 }}>
        <p style={{ color: t.textMuted, lineHeight: 1.8, marginBottom: '3rem', fontSize: '0.93rem' }}>
          I'm available for full-time roles and freelance opportunities.
          Let's build something great together.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {contactLinks.map(({ icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '1.5rem',
                padding: '1.2rem 1.5rem', background: t.cardBg,
                border: `1px solid ${t.accentBorderFaint}`, textDecoration: 'none',
                backdropFilter: 'blur(4px)', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = t.accent; e.currentTarget.style.background = t.accentDim; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = t.accentBorderFaint; e.currentTarget.style.background = t.cardBg; }}
            >
              <span style={{ color: t.accent, fontSize: '1.2rem', width: 24, textAlign: 'center', flexShrink: 0 }}>
                {icon}
              </span>
              <div style={{ minWidth: 0 }}>
                <p style={{ color: t.textFaint, fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                  {label}
                </p>
                <p style={{ color: t.text, fontSize: '0.88rem', wordBreak: 'break-all' }}>{value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
import TypeWriter from '../components/TypeWriter';
import photo  from '../assets/Pintu_Karjee.png';
import resume from '../assets/Pintu_KarjeeCV.pdf';

export default function Hero({ scrollTo, t }) {
  const btn = (bg, color, border, children, onClick, href, download) => {
    const style = {
      padding: '0.8rem 1.6rem', fontFamily: "'IBM Plex Mono', monospace",
      fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase',
      fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s',
      background: bg, color, border, textDecoration: 'none',
      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
    };
    if (href) return <a href={href} download={download} style={style}>{children}</a>;
    return <button onClick={onClick} style={style}>{children}</button>;
  };

  return (
    <section id="home" className="hero-section" style={{ position: 'relative', zIndex: 2 }}>
      {/* Left — text */}
      <div className="hero-content" style={{ animation: 'fadeInUp 0.8s ease forwards' }}>
        <p style={{ color: t.accent, fontSize: '0.8rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          &gt; Hello, World!
        </p>

        <h1 className="hero-title" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, lineHeight: 1.05, color: t.white, marginBottom: '1rem' }}>
          Pintu<br />
          <span style={{ WebkitTextStroke: `2px ${t.accent}`, WebkitTextFillColor: 'transparent' }}>Karjee</span>
        </h1>

        <div className="hero-subtitle" style={{ color: t.textMuted, marginBottom: '2rem', fontWeight: 300 }}>
          <TypeWriter text="Java Developer → Spring Boot & AWS Specialist" speed={50} t={t} />
        </div>

        <p className="hero-desc" style={{ color: t.textDim, lineHeight: 1.8, marginBottom: '2.5rem' }}>
          Java Developer with 2.6+ years building robust Spring Boot microservices,
          RESTful APIs, and scalable backend systems deployed on AWS.
        </p>

        <div className="hero-buttons">
          {btn(t.accent,   t.btnText, 'none',                      'Hire Me',    () => scrollTo('contact'))}
          {btn('transparent', t.accent, `1px solid ${t.accent}`,   'View Work',  () => scrollTo('projects'))}
          {btn(t.cardBg,   t.textMuted, `1px solid ${t.accentBorder}`, '↓ Resume', null, resume, 'Pintu_Karjee_Resume.pdf')}
        </div>
      </div>

      {/* Right — photo */}
      <div className="hero-photo-wrap" style={{ animation: 'fadeInUp 1s 0.3s ease both' }}>
        <div style={{
          width: 'clamp(150px, 20vw, 260px)', height: 'clamp(150px, 20vw, 260px)',
          borderRadius: '50%', border: `2px solid ${t.photoRing}`,
          padding: '5px', background: t.accentDim, overflow: 'hidden',
          boxShadow: `0 0 40px ${t.photoGlow}`,
        }}>
          <img src={photo} alt="Pintu Karjee" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', display: 'block' }} />
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.35rem 0.9rem', background: t.cardBg,
          border: `1px solid ${t.accentBorder}`, fontSize: '0.7rem',
          letterSpacing: '0.1em', color: t.accent, textTransform: 'uppercase', fontWeight: 600,
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: t.accent, animation: 'blink 1.5s infinite', display: 'inline-block' }} />
          Open to Work
        </div>
      </div>
    </section>
  );
}
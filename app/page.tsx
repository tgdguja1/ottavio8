export default function Design1() {
  const stars = Array.from({length: 55}, (_, i) => ({
    id: i,
    w: (((i * 7 + 13) % 20) / 10 + 1).toFixed(1),
    left: ((i * 137.508) % 100).toFixed(2),
    top: ((i * 97.3) % 100).toFixed(2),
    dur: ((i * 1.3 % 4) + 2).toFixed(1),
    delay: ((i * 0.8) % 5).toFixed(1),
    opacity: ((i % 5) / 10 + 0.1).toFixed(1),
  }));

  const voices = [
    {name: 'Soprano', note: 'Dorothea Christ'},
    {name: 'Soprano', note: 'Fabienne Viredaz'},
    {name: 'Alto', note: 'Catherine Cruchet'},
    {name: 'Alto', note: 'Aurelia Linnert'},
    {name: 'Ténor', note: 'Eric Cogniat'},
    {name: 'Ténor', note: 'Jean-Numa Grau'},
    {name: 'Basse', note: 'Jacques Gumy'},
    {name: 'Basse', note: 'Pierre Pantillon'},
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Cinzel:wght@400;600;700&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
          --gold: #c9a84c;
          --gold-light: #e8c97a;
          --gold-dim: #8a6d2e;
          --cream: #e8e0cc;
          --dark: #0a0a08;
        }
        body { background: var(--dark); color: var(--cream); font-family: 'Cormorant Garamond', serif; overflow-x: hidden; }
        .stars { position: fixed; inset: 0; pointer-events: none; z-index: 0; }
        .star { position: absolute; background: var(--gold-light); border-radius: 50%; animation: twinkle var(--dur) ease-in-out infinite var(--delay); opacity: 0; }
        @keyframes twinkle { 0%,100%{opacity:0} 50%{opacity:var(--mop)} }
        .ornament { display:flex; align-items:center; gap:1.2rem; justify-content:center; margin:2rem 0; }
        .ol { height:1px; width:80px; background:linear-gradient(90deg,transparent,var(--gold)); }
        .or { height:1px; width:80px; background:linear-gradient(90deg,var(--gold),transparent); }
        .od { width:6px; height:6px; background:var(--gold); transform:rotate(45deg); }
        .hero { position:relative; min-height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:4rem 2rem; z-index:1; }
        .hero::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse 60% 50% at 50% 50%,rgba(201,168,76,.08) 0%,transparent 70%); }
        .eyebrow { font-family:'Cinzel',serif; font-size:.95rem; letter-spacing:.35em; color:var(--gold); text-transform:uppercase; margin-bottom:2.5rem; animation:fadeDown 1.2s ease forwards; opacity:0; }
        .title { font-family:'Cinzel',serif; font-size:clamp(3.5rem,15vw,9rem); font-weight:700; letter-spacing:.08em; line-height:.9; background:linear-gradient(135deg,var(--gold-dim) 0%,var(--gold-light) 40%,var(--gold) 60%,var(--gold-dim) 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; animation:fadeUp 1.4s ease .2s forwards; opacity:0; margin-bottom:1rem; }
        .subtitle { font-family:'Cormorant Garamond',serif; font-size:clamp(1rem,2.5vw,1.3rem); font-weight:300; letter-spacing:.25em; color:var(--cream); opacity:.65; text-transform:uppercase; }
        .tagline { font-family:'Cormorant Garamond',serif; font-style:italic; font-size:clamp(1.1rem,2vw,1.4rem); font-weight:300; color:var(--cream); opacity:0; max-width:540px; line-height:1.7; animation:fadeUp 1.4s ease .8s forwards; margin-top:1.5rem; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeDown { from{opacity:0;transform:translateY(-20px)} to{opacity:1;transform:translateY(0)} }
        .section { position:relative; z-index:1; padding:5rem 2rem; max-width:900px; margin:0 auto; text-align:center; }
        .section-label { font-family:'Cinzel',serif; font-size:.92rem; letter-spacing:.4em; color:var(--gold); text-transform:uppercase; margin-bottom:3rem; }
        .concert-card { border:1px solid rgba(201,168,76,.25); padding:3.5rem; position:relative; background:rgba(201,168,76,.03); }
        .concert-card::before,.concert-card::after { content:''; position:absolute; width:20px; height:20px; border-color:var(--gold); border-style:solid; }
        .concert-card::before { top:-1px;left:-1px;border-width:2px 0 0 2px; }
        .concert-card::after { bottom:-1px;right:-1px;border-width:0 2px 2px 0; }
        .concert-date { font-family:'Cinzel',serif; font-size:.92rem; letter-spacing:.3em; color:var(--gold); text-transform:uppercase; margin-bottom:1rem; }
        .concert-title { font-family:'Cormorant Garamond',serif; font-size:clamp(2rem,5vw,3.2rem); font-weight:300; color:var(--cream); line-height:1.2; margin-bottom:1rem; }
        .concert-venue { font-family:'Cormorant Garamond',serif; font-style:italic; font-size:1.1rem; color:var(--cream); opacity:.6; margin-bottom:2.5rem; }
        .btn { display:inline-block; font-family:'Cinzel',serif; font-size:.95rem; letter-spacing:.3em; text-transform:uppercase; color:var(--dark); background:linear-gradient(135deg,var(--gold-dim),var(--gold-light)); padding:1rem 2.5rem; text-decoration:none; transition:all .3s ease; }
        .btn:hover { transform:translateY(-2px); box-shadow:0 8px 30px rgba(201,168,76,.3); background:linear-gradient(135deg,var(--gold-light),var(--gold)); }
        .concert-free { display:inline-block; font-family:'Cinzel',serif; font-size:.95rem; letter-spacing:.3em; text-transform:uppercase; color:var(--gold-light); border:1px solid rgba(201,168,76,.35); padding:.9rem 2rem; }
        .voices-grid { display:grid; grid-template-columns:repeat(4,1fr); border:1px solid rgba(201,168,76,.15); margin-top:3rem; }
        .voice { padding:2rem 1rem; border-right:1px solid rgba(201,168,76,.15); border-bottom:1px solid rgba(201,168,76,.15); transition:background .3s; }
        .voice:nth-child(4n){border-right:none} .voice:nth-last-child(-n+4){border-bottom:none}
        .voice:hover { background:rgba(201,168,76,.05); }
        .vname { font-family:'Cinzel',serif; font-size:.92rem; letter-spacing:.25em; color:var(--gold); text-transform:uppercase; margin-bottom:.5rem; }
        .vnote { font-family:'Cormorant Garamond',serif; font-style:italic; font-size:1.4rem; color:var(--cream); opacity:.5; }
        .about-text { font-family:'Cormorant Garamond',serif; font-size:clamp(1.1rem,2vw,1.3rem); font-weight:300; line-height:1.85; color:var(--cream); opacity:.8; max-width:680px; margin:0 auto; }
        .social-links { display:flex; gap:2rem; justify-content:center; margin-top:2rem; }
        .social-link { font-family:'Cinzel',serif; font-size:.92rem; letter-spacing:.3em; text-transform:uppercase; color:var(--gold); text-decoration:none; padding-bottom:4px; border-bottom:1px solid rgba(201,168,76,.3); transition:all .3s; }
        .social-link:hover { color:var(--gold-light); border-bottom-color:var(--gold-light); }
        .footer { position:relative; z-index:1; text-align:center; padding:2rem; border-top:1px solid rgba(201,168,76,.1); }
        .footer-text { font-family:'Cinzel',serif; font-size:.9rem; letter-spacing:.3em; color:var(--gold-dim); text-transform:uppercase; }
        .wave { position:relative; z-index:1; height:60px; overflow:hidden; margin:0; opacity:.12; }
        @media(max-width:640px){ .voices-grid{grid-template-columns:repeat(2,1fr)} .voice:nth-child(4n){border-right:1px solid rgba(201,168,76,.15)} .voice:nth-child(2n){border-right:none} .voice:nth-last-child(-n+4){border-bottom:1px solid rgba(201,168,76,.15)} .voice:nth-last-child(-n+2){border-bottom:none} .concert-card{padding:2rem 1.5rem} .hero{padding:3rem 1.25rem} .eyebrow{font-size:.8rem;letter-spacing:.25em;margin-bottom:1.8rem} .ornament{margin:1.5rem 0} .ol,.or{width:50px} .section{padding:3.5rem 1.25rem} .concert-free{letter-spacing:.2em;font-size:.82rem;padding:.8rem 1.4rem} }
      `}</style>

      <div className="stars" aria-hidden="true">
        {stars.map(s => (
          <div key={s.id} className="star" style={{
            width: `${s.w}px`, height: `${s.w}px`,
            left: `${s.left}%`, top: `${s.top}%`,
            ['--dur' as string]: `${s.dur}s`,
            ['--delay' as string]: `${s.delay}s`,
            ['--mop' as string]: s.opacity,
          }} />
        ))}
      </div>

      <section className="hero">
        <p className="eyebrow">EVO</p>
        <h1 className="title">Ottavio</h1>
        <div className="ornament">
          <div className="ol"></div>
          <div className="od"></div><div className="od" style={{marginLeft:'-0.8rem'}}></div><div className="od" style={{marginLeft:'-0.8rem'}}></div>
          <div className="or"></div>
        </div>
        <p className="subtitle">Ensemble Vocal Ottavio (EVO)</p>
        <p className="tagline">Huit voix. Une harmonie.</p>
      </section>

      <div className="wave" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,30 C150,60 300,0 450,30 C600,60 750,0 900,30 C1050,60 1150,15 1200,30" fill="none" stroke="#c9a84c" strokeWidth="1.5"/>
        </svg>
      </div>

      <section className="section" style={{maxWidth: '680px'}}>
        <p className="section-label">À propos</p>
        <p className="about-text">
          L'Octuor Ottavio rassemble huit voix passionnées. Fondé sur l'amour du chant choral, l'ensemble interprète un répertoire varié allant du classique au contemporain, des polyphonies de la Renaissance aux créations d'aujourd'hui.
        </p>
      </section>

      <section className="section">
        <p className="section-label">Prochain concert</p>
        <div className="concert-card">
          <p className="concert-date">Vendredi&nbsp;26&nbsp;mars&nbsp;2027 · 15h</p>
          <p className="concert-venue">Temple&nbsp;de&nbsp;Renens</p>
          <h2 className="concert-title"><strong>Requiem&nbsp;für&nbsp;Mignon</strong><span style={{fontSize:'0.66em'}}> de&nbsp;Schumann</span><br /><strong>Stabat&nbsp;Mater</strong><span style={{fontSize:'0.66em'}}> en&nbsp;sol&nbsp;mineur&nbsp;D175 de&nbsp;Schubert<br />avec&nbsp;le&nbsp;DS&nbsp;Quartet<br />direction:&nbsp;Luc&nbsp;Baghdassarian</span></h2>
        </div>
      </section>

      <section className="section">
        <p className="section-label">Les huit voix</p>
        <div className="voices-grid">
          {voices.map(v => (
            <div key={v.name} className="voice">
              <p className="vname">{v.name}</p>
              <p className="vnote">{v.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="section-label">Précédents Concerts</p>
        <div className="concert-card">
          <p className="concert-date">Dimanche&nbsp;7&nbsp;Juin&nbsp;2026 · 19h00</p>
          <p className="concert-venue">Temple d'Yverdon-les-Bains</p>
          <h2 className="concert-title"><strong>Christus</strong><span style={{fontSize:'0.66em'}}> de&nbsp;Mendelssohn</span><br /><span style={{fontSize:'0.66em'}}>avec&nbsp;le&nbsp;DS&nbsp;Quartet<br />direction:&nbsp;Luc&nbsp;Baghdassarian</span></h2>
        </div>
      </section>

      <section className="section">
        <p className="section-label">Suivez l'ensemble</p>
        <div className="social-links">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
        </div>
      </section>

      <footer className="footer">
        <p className="footer-text">© 2026 EVO</p>
      </footer>
    </>
  );
        }

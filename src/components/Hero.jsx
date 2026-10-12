function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '↓'}</span>
}

function Hero({ data }) {
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="eyebrow-line" /> Open to learning & building</p>
          <h1>Hi, I’m <span className="gradient-text">A. Bhagya Lakshmi</span><span className="hero-period">.</span></h1>
          <p className="hero-role">{data.role}</p>
          <p className="hero-intro">Turning curiosity into practical, human-centered technology — one thoughtful project at a time.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View projects <Arrow diagonal /></a>
            <a className="button button-ghost" href="#contact">Contact me <Arrow diagonal /></a>
          </div>
          <div className="hero-meta">
            <span><i className="status-dot" /> {data.currentYear}</span>
            <span className="meta-divider" />
            <span>{data.degree}</span>
          </div>
        </div>
        <div className="hero-art reveal reveal-delay" aria-label="Abstract decorative illustration">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="hero-core"><span>{data.initials}</span></div>
          <span className="float-label float-label-top">AI / DS</span>
          <span className="float-label float-label-right">PYTHON</span>
          <span className="float-label float-label-bottom">BUILD · LEARN · GROW</span>
          <div className="hero-star star-one">✦</div>
          <div className="hero-star star-two">✧</div>
        </div>
      </div>
      <a className="scroll-cue" href="#about"><span>Scroll to explore</span><Arrow /></a>
    </section>
  )
}

export default Hero

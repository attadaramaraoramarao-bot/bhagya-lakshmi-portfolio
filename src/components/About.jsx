function About({ data }) {
  return (
    <section className="section section-border" id="about">
      <div className="container split-layout">
        <div className="section-heading reveal">
          <p className="section-kicker">01 / About me</p>
          <h2>Curious by nature.<br /><span className="muted-heading">Intentional by design.</span></h2>
        </div>
        <div className="section-body reveal reveal-delay">
          <p className="lead-copy">{data.about}</p>
          <p className="body-copy">I enjoy learning in public, asking better questions, and translating ideas into clean, approachable interfaces. Every new challenge is an invitation to strengthen both the technical foundation and the way the work is communicated.</p>
          <div className="mini-facts">
            <div><span className="fact-number">4th</span><span className="fact-label">Year of study</span></div>
            <div><span className="fact-number">AI</span><span className="fact-label">Focus area</span></div>
            <div><span className="fact-number">Build</span><span className="fact-label">Learn by doing</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

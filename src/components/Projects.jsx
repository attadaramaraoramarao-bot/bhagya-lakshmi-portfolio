function Projects({ data }) {
  return (
    <section className="section section-border" id="projects">
      <div className="container">
        <div className="section-intro project-intro reveal">
          <p className="section-kicker">03 / Selected work</p>
          <h2>Building with purpose<span className="hero-period">.</span></h2>
          <p>One project, honestly described — with room to grow as the work grows.</p>
        </div>
        <div className="project-card reveal reveal-delay">
          <div className="project-number">01</div>
          <div className="project-main">
            <div className="project-topline"><span>{data.projects[0].label}</span><span>{data.projects[0].status}</span></div>
            <h3>{data.projects[0].name}</h3>
            <p>{data.projects[0].description}</p>
            <div className="project-links">
              {data.projects[0].links.length > 0 ? data.projects[0].links.map((link) => <a className="text-link" href={link.url} key={link.label}>{link.label} ↗</a>) : <span className="link-placeholder">Links will appear here when verified URLs are available.</span>}
            </div>
          </div>
          <div className="project-visual" aria-hidden="true">
            <div className="visual-grid" />
            <div className="visual-cross visual-cross-one" />
            <div className="visual-cross visual-cross-two" />
            <span>MEDI<br />ASSIST<br /><em>AI</em></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

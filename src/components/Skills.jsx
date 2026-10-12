function Skills({ data }) {
  return (
    <section className="section section-tight" id="skills">
      <div className="container">
        <div className="section-intro reveal">
          <p className="section-kicker">02 / Technical skills</p>
          <h2>A toolkit in progress<span className="hero-period">.</span></h2>
          <p>Foundations I’m actively strengthening through coursework, practice, and projects.</p>
        </div>
        <div className="skills-list reveal reveal-delay">
          {data.skills.map((skill, index) => (
            <div className="skill-row" key={skill}>
              <span className="skill-index">0{index + 1}</span>
              <span className="skill-name">{skill}</span>
              <span className="skill-line" />
              <span className="skill-mark" aria-hidden="true">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

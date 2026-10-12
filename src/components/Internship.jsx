function Internship({ data }) {
  const { internship } = data
  return (
    <section className="section section-tight" id="journey">
      <div className="container split-layout journey-layout">
        <div className="section-heading reveal">
          <p className="section-kicker">04 / Experience</p>
          <h2>The journey<br /><span className="muted-heading">so far.</span></h2>
        </div>
        <div className="experience-card reveal reveal-delay">
          <div className="experience-header"><span className="timeline-dot" /><span className="experience-label">Internship</span><span className="experience-date">{internship.dates}</span></div>
          <h3>{internship.company}</h3>
          <p className="editable-note">{internship.domain}</p>
          <div className="experience-columns">
            <div><h4>Responsibilities</h4>{internship.responsibilities.map((item) => <p key={item}>{item}</p>)}</div>
            <div><h4>Achievements</h4>{internship.achievements.map((item) => <p key={item}>{item}</p>)}</div>
          </div>
          <p className="edit-helper">Details marked as editable are ready to update when verified information is available.</p>
        </div>
      </div>
    </section>
  )
}

export default Internship

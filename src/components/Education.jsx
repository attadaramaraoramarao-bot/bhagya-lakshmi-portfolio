function Education({ data }) {
  const { education } = data
  return (
    <section className="section section-border" id="education">
      <div className="container education-layout">
        <div className="section-intro reveal"><p className="section-kicker">05 / Education</p><h2>Learning the<br /><span className="muted-heading">long game.</span></h2></div>
        <div className="education-card reveal reveal-delay">
          <div className="education-icon" aria-hidden="true">✦</div>
          <div><p className="education-degree">{education.degree}</p><p className="education-status">{education.status}</p></div>
          <div className="education-details"><div><span>College</span><strong>{education.college}</strong></div><div><span>CGPA</span><strong>{education.cgpa}</strong></div><div><span>Graduation</span><strong>{education.graduationYear}</strong></div></div>
        </div>
      </div>
    </section>
  )
}

export default Education

function Resume({ data }) {
  const ready = Boolean(data.resumePath)
  return (
    <section className="resume-band" id="resume">
      <div className="container resume-content reveal">
        <div><p className="section-kicker">07 / Resume</p><h2>Keep the conversation going<span className="hero-period">.</span></h2><p>{ready ? 'Download the latest verified version of my resume.' : 'A verified PDF will be available here when it is added.'}</p></div>
        {ready ? <a className="button button-primary" href={data.resumePath} download>Download resume ↗</a> : <button className="button button-disabled" type="button" disabled>Resume coming soon</button>}
      </div>
    </section>
  )
}

export default Resume

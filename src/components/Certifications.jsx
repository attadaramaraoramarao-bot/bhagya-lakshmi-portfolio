function Certifications({ data }) {
  return (
    <section className="section section-tight" id="certifications">
      <div className="container certifications-layout">
        <div className="section-intro reveal"><p className="section-kicker">06 / Certifications</p><h2>Proof of<br /><span className="muted-heading">practice.</span></h2></div>
        <div className="cert-list reveal reveal-delay">
          {data.certifications.map((certificate, index) => <div className="cert-row" key={certificate.name}><span className="cert-index">0{index + 1}</span><div><span className="cert-issuer">{certificate.issuer}</span><h3>{certificate.name}</h3></div><span className="cert-arrow">↗</span></div>)}
          <div className="cert-add"><span>+</span> Additional certificates can be added here later.</div>
        </div>
      </div>
    </section>
  )
}

export default Certifications

function Footer({ data }) {
  return (
    <footer className="site-footer">
      <div className="container footer-top"><a className="wordmark" href="#home"><span className="wordmark-mark">B</span><span>bhagya<span className="wordmark-dot">.</span></span></a><p>Designed and built with intention.</p><div className="footer-socials"><a href={data.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={data.github} target="_blank" rel="noreferrer">GitHub ↗</a></div></div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} {data.name}</span><a href="#home">Back to top ↑</a></div>
    </footer>
  )
}

export default Footer

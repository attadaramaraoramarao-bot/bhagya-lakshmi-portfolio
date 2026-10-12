import { useState } from 'react'

function Contact({ data }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }))

  const submit = (event) => {
    event.preventDefault()
    setError('')
    if (!Object.values(form).every((value) => value.trim())) {
      setError('Please complete every field before continuing.')
      return
    }
    if (!data.contactServiceConfigured) {
      setError(`The contact form is not connected yet. Please email ${data.email} directly.`)
      return
    }
    setSent(true)
  }

  return (
    <section className="section section-border contact-section" id="contact">
      <div className="container contact-layout">
        <div className="contact-copy reveal">
          <p className="section-kicker">08 / Contact</p>
          <h2>Let’s make<br /><span className="gradient-text">something useful.</span></h2>
          <p className="lead-copy">Have a question, idea, or opportunity worth exploring? I’d love to hear from you.</p>
          <div className="contact-details">
            <a href={`mailto:${data.email}`}><span>Email</span>{data.email}</a>
            <a href={`tel:${data.phone}`}><span>Phone</span>{data.phone}</a>
            <a href={data.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span>View profile ↗</a>
            <a href={data.github} target="_blank" rel="noreferrer"><span>GitHub</span>View profile ↗</a>
          </div>
        </div>
        <form className="contact-form reveal reveal-delay" onSubmit={submit} noValidate>
          <div className="form-row"><label>Name<input name="name" value={form.name} onChange={update} placeholder="Your name" required /></label><label>Email<input type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" required /></label></div>
          <label>Subject<input name="subject" value={form.subject} onChange={update} placeholder="What would you like to talk about?" required /></label>
          <label>Message<textarea name="message" value={form.message} onChange={update} rows="5" placeholder="Say hello..." required /></label>
          {error && <p className="form-message form-error" role="alert">{error}</p>}
          {sent && <p className="form-message form-success" role="status">Thanks — your message is ready to be delivered.</p>}
          <button className={`button ${data.contactServiceConfigured ? 'button-primary' : 'button-disabled'}`} type="submit" disabled={!data.contactServiceConfigured}>{data.contactServiceConfigured ? 'Send message ↗' : 'Email me directly'}</button>
          {!data.contactServiceConfigured && <p className="form-note">Form submission will activate when a real contact service is configured. For now, please use the email link.</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact

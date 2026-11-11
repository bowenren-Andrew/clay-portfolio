import { contact, profile } from '../data/site.js'
import { ArrowUpRight, GitHub, Hand } from './Icons.jsx'

function backToTop() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
}

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <div className="contact__panel" data-reveal>
          <span className="contact__blob contact__blob--a" aria-hidden="true" />
          <span className="contact__blob contact__blob--b" aria-hidden="true" />
          <span className="contact__grain" aria-hidden="true" />

          <div className="contact__copy">
            <p className="contact__eyebrow">
              <span>04</span>
              CONTACT / 联系
            </p>
            <h2 className="contact__title">
              有想法，
              <br />
              <em>就聊聊。</em>
            </h2>
            <p className="contact__lead">{contact.lead}</p>

            <div className="contact__links">
              <a
                className="contact-link"
                href={profile.github.url}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link__icon"><GitHub size={18} /></span>
                <span className="contact-link__copy">
                  <small>GITHUB</small>
                  <b>{profile.github.label}</b>
                </span>
                <ArrowUpRight size={17} />
              </a>

              <a
                className="contact-link"
                href={profile.app.url}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link__icon contact-link__icon--clay">
                  <Hand size={18} />
                </span>
                <span className="contact-link__copy">
                  <small>LIVE APP</small>
                  <b>课程资料问答助手</b>
                </span>
                <ArrowUpRight size={17} />
              </a>
            </div>

            <p className="contact__status">
              <span className="status-dot" />
              {contact.note} · {profile.location}
            </p>
          </div>

          <div className="contact__visual" data-parallax="0.035">
            <span className="contact__ring" aria-hidden="true" />
            <div className="contact__face">
              <img src="/media/avatar-profile.png" alt="任博文侧面头像" />
            </div>
            <span className="contact__speech">
              SAY HI
              <i aria-hidden="true" />
            </span>
            <span className="contact__caption">SIDE PROFILE · 90°</span>
          </div>
        </div>

        <footer className="footer">
          <span>© 2026 REN BOWEN</span>
          <span>HANDMADE WITH REACT + VITE</span>
          <button type="button" onClick={backToTop}>
            BACK TO TOP ↑
          </button>
        </footer>
      </div>
    </section>
  )
}

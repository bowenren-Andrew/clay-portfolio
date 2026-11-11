import { about, facts, learning, profile } from '../data/site.js'
import SectionHeader from './SectionHeader.jsx'
import { ArrowUpRight } from './Icons.jsx'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="wrap">
        <SectionHeader
          index="01"
          title="ABOUT"
          cn="关于我"
          note="从数据集，走向物理世界。"
        />

        <div className="about__grid">
          <div className="about__visual" data-reveal>
            <div className="about__frame" data-parallax="0.04">
              <span className="about__frame-back" aria-hidden="true" />
              <img
                src="/media/avatar-three-quarter.png"
                alt="任博文 3/4 侧面头像"
              />
              <span className="about__frame-label">SIDE OF ME · 3/4</span>
            </div>

            <blockquote className="about__quote">
              <span className="about__quote-mark" aria-hidden="true">“</span>
              {about.quote}
            </blockquote>

            <span className="about__stamp" aria-hidden="true">
              <span>PERCEIVE</span>
              <i />
              <span>REASON</span>
              <i />
              <span>ACT</span>
            </span>
          </div>

          <div className="about__content">
            <h2 className="about__title" data-reveal>
              把想法，
              <em>捏成</em>
              能跑的东西。
            </h2>
            <p className="about__lead" data-reveal>{about.lead}</p>
            <p className="about__body" data-reveal>{about.body}</p>

            <dl className="about__facts" data-reveal>
              {facts.map((fact) => (
                <div className="about__fact" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="about__learning" data-reveal>
              <div className="about__learning-head">
                <span>LEARNING NOW</span>
                <span>03 THREADS</span>
              </div>
              <ol>
                {learning.map((item) => (
                  <li key={item.index}>
                    <span className="about__learning-num">{item.index}</span>
                    <div>
                      <b>{item.title}</b>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <a
              className="text-link about__link"
              href={profile.github.url}
              target="_blank"
              rel="noreferrer"
              data-reveal
            >
              在 GitHub 上找到我
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

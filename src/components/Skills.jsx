import { skills } from '../data/site.js'
import SectionHeader from './SectionHeader.jsx'
import { SkillIcon } from './Icons.jsx'

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="wrap">
        <SectionHeader
          index="03"
          title="CAPABILITIES"
          cn="能力"
          note="工具是手，方向是路。"
        />

        <div className="skills__grid">
          {skills.map((skill, index) => (
            <article
              className={`skill${index >= 3 ? ' skill--wide' : ''}`}
              key={skill.id}
              data-reveal
              style={{ '--delay': `${index * 70}ms` }}
            >
              <div className="skill__top">
                <span className={`skill__icon-wrap skill__icon-wrap--${index + 1}`}>
                  <SkillIcon name={skill.icon} />
                </span>
                <span className="skill__num">0{index + 1}</span>
              </div>

              <h3 className="skill__title">
                {skill.title}
                {skill.badge ? <span className="skill__badge">{skill.badge}</span> : null}
              </h3>
              <p className="skill__cn">
                {skill.cn}
                <span aria-hidden="true">·</span>
                <em>{skill.en}</em>
              </p>
              <p className="skill__desc">{skill.desc}</p>
              <ul className="skill__tags">
                {skill.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="skills__note" data-reveal>
          工具会变，把问题拆开的能力不会。
        </p>
      </div>
    </section>
  )
}

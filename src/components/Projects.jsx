import { projectMore, projects } from '../data/site.js'
import ProjectCard from './ProjectCard.jsx'
import SectionHeader from './SectionHeader.jsx'
import { ArrowUpRight } from './Icons.jsx'

export default function Projects() {
  return (
    <section className="section projects" id="work">
      <div className="wrap">
        <SectionHeader
          index="02"
          title="SELECTED WORK"
          cn="精选项目"
          note="先做能用的，再做更大的。"
        />

        <div className={`projects__list${projects.length > 1 ? ' is-multi' : ''}`}>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>

        <a
          className="projects__more"
          href={projectMore.url}
          target="_blank"
          rel="noreferrer"
          data-reveal
        >
          <span className="projects__more-label">MORE SOON</span>
          <span>{projectMore.text}</span>
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  )
}

import { ArrowUpRight } from './Icons.jsx'
import ProjectPreview from './ProjectPreview.jsx'

export default function ProjectCard({ project }) {
  return (
    <article className="project">
      <div className="project__copy" data-reveal>
        <div className="project__top">
          <span className="project__index">{project.index}</span>
          <span className="project__tag">{project.tag}</span>
          <span className="project__type">{project.type}</span>
        </div>

        <h3 className="project__title">{project.title}</h3>
        <p className="project__en">{project.titleEn}</p>
        <p className="project__summary">{project.summary}</p>

        <ul className="project__features">
          {project.features.map((feature) => (
            <li key={feature.title}>
              <span className="project__feature-dot" aria-hidden="true" />
              <div>
                <b>{feature.title}</b>
                <p>{feature.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <ul className="project__stack" aria-label="技术栈">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="project__links">
          <a
            className="btn btn--primary btn--small"
            href={project.links.app}
            target="_blank"
            rel="noreferrer"
          >
            打开应用
            <ArrowUpRight size={14} />
          </a>
          <a
            className="text-link"
            href={project.links.repo}
            target="_blank"
            rel="noreferrer"
          >
            查看源码
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="project__visual" data-reveal>
        <span className="project__featured" aria-hidden="true">
          FEATURED
          <b>{project.index}</b>
        </span>
        <ProjectPreview project={project} />
        {project.caption && (
          <p className="project__caption">
            <span>界面预览</span>
            {project.caption}
          </p>
        )}
      </div>
    </article>
  )
}

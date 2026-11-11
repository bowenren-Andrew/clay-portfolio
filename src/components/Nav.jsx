import { navLinks, profile } from '../data/site.js'
import { GitHub } from './Icons.jsx'

export default function Nav({ active }) {
  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__brand" href="#top" aria-label="回到顶部">
          <span className="nav__mark">RB</span>
          <span className="nav__word">
            REN BOWEN
            <em>CLAY PORTFOLIO</em>
          </span>
        </a>

        <nav className="nav__links" aria-label="页面导航">
          {navLinks.map((link) => (
            <a
              className={`nav__link${active === link.id ? ' is-active' : ''}`}
              href={`#${link.id}`}
              key={link.id}
              aria-current={active === link.id ? 'location' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="nav__cta"
          href={profile.github.url}
          target="_blank"
          rel="noreferrer"
        >
          <GitHub size={15} />
          <span>GITHUB</span>
        </a>
      </div>
    </header>
  )
}

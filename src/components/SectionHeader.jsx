export default function SectionHeader({ index, title, cn, note }) {
  return (
    <header className="section-head" data-reveal>
      <div className="section-head__row">
        <p className="section-head__label">
          <span className="section-head__index">{index}</span>
          <span className="section-head__title">{title}</span>
          <span className="section-head__cn">{cn}</span>
        </p>
        {note ? <p className="section-head__note">{note}</p> : null}
      </div>
      <span className="section-head__line" aria-hidden="true">
        <i />
      </span>
    </header>
  )
}

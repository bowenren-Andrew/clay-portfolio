export default function ProjectPreview({ project }) {
  const preview = project.preview
  if (!preview) return null

  return (
    <div className="preview" role="img" aria-label="课程资料问答助手界面预览">
      <span className="preview__seal" aria-hidden="true">
        RAG
        <small>RETRIEVAL<br />+ GENERATION</small>
      </span>

      <div className="preview__window">
        <div className="preview__bar">
          <span className="preview__dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="preview__url">{preview.url}</span>
          <span className="preview__live">
            <i />
            LIVE
          </span>
        </div>

        <div className="preview__body">
          <div className="preview__docs">
            <p className="preview__kicker">KNOWLEDGE BASE</p>
            <div className="preview__files">
              {preview.files.map((file) => (
                <div className="preview__file" key={file.name}>
                  <span className="preview__file-type">{file.type}</span>
                  <span className="preview__file-copy">
                    <b>{file.name}</b>
                    <small>{file.meta}</small>
                  </span>
                  <span className="preview__file-check" aria-hidden="true">✓</span>
                </div>
              ))}
            </div>
            <p className="preview__summary">
              <span>AUTO SUMMARY</span>
              {preview.summary}
            </p>
          </div>

          <div className="preview__chat">
            <p className="preview__kicker">ASK YOUR NOTES</p>
            <div className="preview__bubble preview__bubble--q">{preview.question}</div>
            <div className="preview__bubble preview__bubble--a">
              <p>{preview.answer}</p>
              <p>{preview.answer2}</p>
              <div className="preview__sources">
                {preview.sources.map((source) => (
                  <span key={source.name}>
                    {source.name}
                    <em>{source.loc}</em>
                  </span>
                ))}
              </div>
            </div>
            <div className="preview__suggestions">
              {preview.questions.slice(0, 2).map((question) => (
                <span key={question}>{question}</span>
              ))}
            </div>
            <div className="preview__input">
              <span>继续追问…</span>
              <i aria-hidden="true">↑</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

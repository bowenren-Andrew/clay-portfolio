export default function BlinkAvatar({ src, alt, className = '' }) {
  return (
    <span className={`blink-avatar ${className}`}>
      <img src={src} alt={alt} />
      <span className="blink-avatar__lids" aria-hidden="true">
        <i className="blink-avatar__lid blink-avatar__lid--left" />
        <i className="blink-avatar__lid blink-avatar__lid--right" />
      </span>
    </span>
  )
}

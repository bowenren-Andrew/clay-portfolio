export function ArrowUpRight({ size = 16, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12 12 4" />
      <path d="M5.5 4H12v6.5" />
    </svg>
  )
}

export function ArrowDown({ size = 16, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 3v10" />
      <path d="m4 9 4 4 4-4" />
    </svg>
  )
}

export function GitHub({ size = 18, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.48 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.4 9.4 0 0 1 12 6.98c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.48A10.24 10.24 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

export function Globe({ size = 16, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="5.8" />
      <path d="M2.4 8h11.2M8 2.2c1.7 1.7 2.5 3.6 2.5 5.8S9.7 12.1 8 13.8C6.3 12.1 5.5 10.2 5.5 8S6.3 3.9 8 2.2Z" />
    </svg>
  )
}

export function Hand({ size = 16, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 7.4V3.6a.9.9 0 0 1 1.8 0v3.2-4a.9.9 0 0 1 1.8 0v4-3a.9.9 0 0 1 1.8 0v4.4-1.7a.9.9 0 0 1 1.8 0v3.1c0 2.3-1.55 3.9-3.8 3.9-1.5 0-2.5-.6-3.2-1.7l-1.6-2.5a.95.95 0 0 1 1.5-1.15L6 7.4Z" />
    </svg>
  )
}

export function Sparkle({ size = 18, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9 1.2c.5 3.7 1.9 5.1 5.6 5.6-3.7.5-5.1 1.9-5.6 5.6-.5-3.7-1.9-5.1-5.6-5.6C7.1 6.3 8.5 4.9 9 1.2Z" />
      <path d="M14.4 11.2c.2 1.6.8 2.2 2.4 2.4-1.6.2-2.2.8-2.4 2.4-.2-1.6-.8-2.2-2.4-2.4 1.6-.2 2.2-.8 2.4-2.4Z" opacity=".7" />
    </svg>
  )
}

const SKILL_PATHS = {
  code: (
    <>
      <path d="m11 10.5-5.5 5.5L11 21.5" />
      <path d="m21 10.5 5.5 5.5L21 21.5" />
      <path d="m18 7.5-4 17" />
    </>
  ),
  brain: (
    <>
      <path d="M13 6.2a4 4 0 0 0-6.8 2.9c-1.9.6-3.2 2.3-3.2 4.3 0 1.7 1 3.2 2.5 3.9-.3 2.3 1.4 4.3 3.8 4.3 1.6 0 3-1 3.7-2.4" />
      <path d="M19 6.2a4 4 0 0 1 6.8 2.9c1.9.6 3.2 2.3 3.2 4.3 0 1.7-1 3.2-2.5 3.9.3 2.3-1.4 4.3-3.8 4.3-1.6 0-3-1-3.7-2.4" />
      <path d="M16 5.2v21.6" />
      <path d="M12.2 12.2c1.2-.8 2.5-.8 3.8 0M20 12.2c-1.2-.8-2.5-.8-3.8 0" />
    </>
  ),
  layers: (
    <>
      <path d="m16 4.5 11 5.2-11 5.2-11-5.2 11-5.2Z" />
      <path d="m5 15.4 11 5.2 11-5.2" />
      <path d="m5 21 11 5.2L27 21" opacity=".65" />
    </>
  ),
  search: (
    <>
      <path d="M8.5 5.5h10.8l4.2 4.2v12.8H8.5z" />
      <path d="M19.3 5.5v4.2H23M12 12.5h7M12 16.5h5" />
      <circle cx="23.2" cy="23.2" r="4.2" />
      <path d="m26.3 26.3 3 3" />
    </>
  ),
  stack: (
    <>
      <path d="m16 5 10.5 4.8L16 14.6 5.5 9.8 16 5Z" />
      <path d="m5.5 16 10.5 4.8L26.5 16" />
      <path d="m5.5 22.2 10.5 4.8 10.5-4.8" />
    </>
  ),
}

export function SkillIcon({ name }) {
  return (
    <svg
      className="skill__icon"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {SKILL_PATHS[name] ?? SKILL_PATHS.code}
    </svg>
  )
}

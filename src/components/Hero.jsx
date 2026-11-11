import { useEffect, useRef, useState } from 'react'
import { hero, profile } from '../data/site.js'
import { assets } from '../data/assets.js'
import { ArrowDown, ArrowUpRight, Globe, Hand, Sparkle } from './Icons.jsx'
import BlinkAvatar from './BlinkAvatar.jsx'

function useLocalTime() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Asia/Shanghai',
    })
    const tick = () => setTime(formatter.format(new Date()))
    tick()
    const id = window.setInterval(tick, 30000)
    return () => window.clearInterval(id)
  }, [])

  return time
}

export default function Hero() {
  const [waving, setWaving] = useState(false)
  const [reduceMotion] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const turnRef = useRef(null)
  const waveRef = useRef(null)
  const time = useLocalTime()

  const showWave = () => {
    const video = waveRef.current
    if (!video) return
    setWaving(true)
    video.currentTime = 0
    video.play().catch(() => setWaving(false))
  }

  const hideWave = () => {
    const video = waveRef.current
    setWaving(false)
    if (!video) return
    video.pause()
    video.currentTime = 0
  }

  const handlePointerEnter = (event) => {
    if (event.pointerType === 'mouse') showWave()
  }

  const handlePointerLeave = (event) => {
    if (event.pointerType === 'mouse') hideWave()
  }

  useEffect(() => {
    const video = turnRef.current
    if (!video) return undefined
    if (reduceMotion) {
      video.pause()
    } else {
      video.play().catch(() => {})
    }
    return undefined
  }, [reduceMotion])

  return (
    <section className="hero" id="top">
      <div className="hero__backdrop" aria-hidden="true">
        <span className="hero__blob hero__blob--a" />
        <span className="hero__blob hero__blob--b" />
        <span className="hero__ring" />
        <span className="hero__dot hero__dot--a" />
        <span className="hero__dot hero__dot--b" />
      </div>

      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <span className="status-dot" />
            {hero.eyebrow}
            <span className="hero__eyebrow-cn">任博文</span>
          </p>

          <h1 className="hero__name" aria-label="REN BOWEN">
            <span className="hero__name-line">REN</span>
            <span className="hero__name-line hero__name-line--accent">BOWEN</span>
          </h1>

          <p className="hero__role">
            {profile.role}
            <span className="hero__role-sep" aria-hidden="true">/</span>
            <span>机器学习 → 具身智能</span>
          </p>

          <p className="hero__lead">{hero.lead}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#work">
              看看精选项目
              <ArrowUpRight size={15} />
            </a>
            <a
              className="btn btn--ghost"
              href={profile.github.url}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <ArrowUpRight size={15} />
            </a>
          </div>

          <ul className="hero__stack" aria-label="常用技术">
            {hero.chips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__parallax" data-parallax="0.055">
            <span className="hero__halo" aria-hidden="true" />
            <span className="hero__clay-ball hero__clay-ball--a" aria-hidden="true" />
            <span className="hero__clay-ball hero__clay-ball--b" aria-hidden="true" />

            <div className="portrait">
              <div className="portrait__frame">
                <video
                  ref={turnRef}
                  className={`portrait__video${waving ? ' is-hidden' : ''}`}
                  src={assets.headTurn}
                  poster={assets.front}
                  autoPlay={!reduceMotion}
                  muted
                  loop
                  playsInline
                  preload="auto"
                  role="img"
                  aria-label="任博文转头动画"
                />
                <video
                  ref={waveRef}
                  className={`portrait__video portrait__video--wave${waving ? ' is-visible' : ''}`}
                  src={assets.wave}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />
                <span className="portrait__gloss" aria-hidden="true" />
                <button
                  type="button"
                  className="portrait__hit"
                  aria-label={waving ? '停止挥手动画' : '播放挥手动画'}
                  aria-pressed={waving}
                  onPointerEnter={handlePointerEnter}
                  onPointerLeave={handlePointerLeave}
                  onClick={() => (waving ? hideWave() : showWave())}
                >
                  <span className={`portrait__hint${waving ? ' is-waving' : ''}`}>
                    <Hand size={15} />
                    {waving ? 'HELLO!' : 'HOVER TO WAVE'}
                  </span>
                </button>
              </div>

              <span className="portrait__tag">
                <Sparkle size={13} />
                MOTION PORTRAIT
              </span>
            </div>

            <figure className="hero__sticker" data-parallax="0.03">
              <BlinkAvatar
                src={assets.front}
                alt="任博文正面头像，带眨眼动画"
              />
              <figcaption>
                <span>HELLO, I&apos;M</span>
                <b>BOWEN</b>
              </figcaption>
            </figure>

            <span className="hero__chip hero__chip--status">
              <span className="status-dot" />
              {profile.status}
            </span>
            <span className="hero__chip hero__chip--place">
              <Globe size={14} />
              {profile.location}
            </span>
          </div>
        </div>
      </div>

      <div className="wrap hero__foot">
        <a className="scroll-cue" href="#about">
          <span className="scroll-cue__icon">
            <ArrowDown size={15} />
          </span>
          <span>SCROLL TO EXPLORE</span>
        </a>
        <span className="hero__foot-item">FOCUS — ML / DL / EMBODIED AI</span>
        <span className="hero__foot-item hero__clock">
          UTC+8 <b>{time}</b>
        </span>
      </div>
    </section>
  )
}

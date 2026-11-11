import { useEffect } from 'react'

export function useParallax() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('[data-parallax]'))
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!nodes.length || reduceMotion) return undefined

    let frame = 0

    const update = () => {
      frame = 0
      const viewportCenter = window.innerHeight / 2
      nodes.forEach((node) => {
        const rect = node.getBoundingClientRect()
        const center = rect.top + rect.height / 2
        const speed = Number.parseFloat(node.dataset.parallax) || 0.04
        const offset = Math.max(-72, Math.min(72, (center - viewportCenter) * speed))
        node.style.setProperty('--parallax-y', `${offset.toFixed(2)}px`)
      })
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.cancelAnimationFrame(frame)
    }
  }, [])
}

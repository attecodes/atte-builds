'use client'

import { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: 0 | 100 | 200 | 300 | 400
}

const delayClass: Record<number, string> = {
  0: '',
  100: 'animation-delay-100',
  200: 'animation-delay-200',
  300: 'animation-delay-300',
  400: 'animation-delay-400',
}

export default function ScrollReveal({ children, className = '', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('animate-fade-in-up')
          if (delay) el.classList.add(delayClass[delay])
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  )
}

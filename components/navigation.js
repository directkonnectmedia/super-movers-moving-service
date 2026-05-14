import React, { useEffect, useState } from 'react'

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from 'framer-motion'

const BADGE_SRC = '/super-movers-badge.png'

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolledPast, setScrolledPast] = useState(false)
  const prefersReducedMotion = useReducedMotion() === true

  const { scrollY } = useScroll()

  const navHeightMv = useTransform(scrollY, [0, 50], [90, 70])
  const logoHeightMv = useTransform(scrollY, [0, 50], [110, 60])
  const logoPullMv = useTransform(scrollY, [0, 50], [-16, 0])

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolledPast(y > 50)
  })

  useEffect(() => {
    setScrolledPast(typeof window !== 'undefined' && window.scrollY > 50)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('nav-scrolled', scrolledPast)
    return () => document.documentElement.classList.remove('nav-scrolled')
  }, [scrolledPast])

  useEffect(() => {
    const body = document.body
    const root = document.documentElement
    if (menuOpen) {
      body.style.overflow = 'hidden'
      root.style.overflow = 'hidden'
    } else {
      body.style.overflow = ''
      root.style.overflow = ''
    }
    return () => {
      body.style.overflow = ''
      root.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const navHeight = prefersReducedMotion
    ? scrolledPast
      ? 70
      : 90
    : navHeightMv
  const logoHeight = prefersReducedMotion
    ? scrolledPast
      ? 60
      : 110
    : logoHeightMv
  const logoPull = prefersReducedMotion
    ? scrolledPast
      ? 0
      : -16
    : logoPullMv

  return (
    <>
      <div className="navigation-container1">
        <motion.nav
          id="navigation-root"
          className={`navigation-root ${scrolledPast ? 'is-scrolled' : ''}`}
          style={{ height: navHeight }}
        >
          <div className="navigation-container">
            <a href="/" className="navigation-home-link" aria-label="Super Movers Home">
              <span className="navigation-brand navigation-brand--mark">
                <motion.div
                  className="badge-logo-infill badge-logo-infill--nav"
                  style={{ marginBottom: logoPull }}
                >
                  <motion.img
                    className="navigation-brand-logo"
                    src={BADGE_SRC}
                    alt=""
                    width={200}
                    height={140}
                    decoding="async"
                    style={{ height: logoHeight }}
                  />
                </motion.div>
              </span>
            </a>
            <div className="navigation-desktop-menu">
              <ul className="navigation-links">
                <li>
                  <a href="#superpower-section">
                    <div className="navigation-link">
                      <span>Services</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#hero-quote-container">
                    <div className="navigation-link">
                      <span>Pricing</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#stats-section">
                    <div className="navigation-link">
                      <span>Super Stats</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#reviews-section">
                    <div className="navigation-link">
                      <span>Reviews</span>
                    </div>
                  </a>
                </li>
              </ul>
              <a href="#hero-quote-container">
                <div className="btn navigation-cta navigation-cta-quote nav-mandarin-quote btn-lg">
                  <span>Get Quote</span>
                </div>
              </a>
            </div>
            <button
              type="button"
              id="mobile-toggle"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              className="navigation-mobile-toggle"
              onClick={() => setMenuOpen(true)}
            >
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
                className="navigation-menu-icon"
              >
                <path
                  d="M4 8h16M4 16h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </motion.nav>
        <div
          id="mobile-overlay"
          className={`navigation-mobile-overlay ${menuOpen ? 'is-active' : ''}`}
        >
          <div className="navigation-overlay-header">
            <a
              href="/"
              className="navigation-home-link"
              aria-label="Super Movers Home"
              onClick={() => setMenuOpen(false)}
            >
              <span className="navigation-brand navigation-brand--mark">
                <div className="badge-logo-infill badge-logo-infill--overlay">
                  <img
                    className="navigation-overlay-brand-logo"
                    src={BADGE_SRC}
                    alt=""
                    width={160}
                    height={140}
                    decoding="async"
                  />
                </div>
              </span>
            </a>
            <button
              type="button"
              id="mobile-close"
              aria-label="Close navigation"
              className="navigation-mobile-close"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
                className="navigation-close-icon"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="navigation-overlay-content">
            <ul className="navigation-mobile-links">
              <li>
                <a href="#superpower-section" onClick={() => setMenuOpen(false)}>
                  <div className="navigation-mobile-link">
                    <span>Services</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#hero-quote-container" onClick={() => setMenuOpen(false)}>
                  <div className="navigation-mobile-link">
                    <span>Pricing</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#stats-section" onClick={() => setMenuOpen(false)}>
                  <div className="navigation-mobile-link">
                    <span>Super Stats</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#reviews-section" onClick={() => setMenuOpen(false)}>
                  <div className="navigation-mobile-link">
                    <span>Reviews</span>
                  </div>
                </a>
              </li>
            </ul>
            <div className="navigation-mobile-actions">
              <a href="#hero-quote-container" onClick={() => setMenuOpen(false)}>
                <div className="btn btn-xl navigation-mobile-cta navigation-cta-quote nav-mandarin-quote">
                  <span>Get Quote</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation

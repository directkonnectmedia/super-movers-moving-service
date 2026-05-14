import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <nav id="navigation-root" className="navigation-root">
          <div className="navigation-container">
            <a href="/" className="navigation-home-link" aria-label="Super Movers Home">
              <span className="navigation-brand navigation-brand--mark">
                <img
                  className="navigation-brand-logo"
                  src="/super-movers-logo.png"
                  alt=""
                  width={320}
                  height={80}
                  decoding="async"
                />
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
              id="mobile-toggle"
              aria-label="Toggle navigation"
              aria-expanded="false"
              className="navigation-mobile-toggle"
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
        </nav>
        <div id="mobile-overlay" className="navigation-mobile-overlay">
          <div className="navigation-overlay-header">
            <a href="/" className="navigation-home-link" aria-label="Super Movers Home">
              <span className="navigation-brand navigation-brand--mark">
                <img
                  className="navigation-brand-logo"
                  src="/super-movers-logo.png"
                  alt=""
                  width={320}
                  height={80}
                  decoding="async"
                />
              </span>
            </a>
            <button
              id="mobile-close"
              aria-label="Close navigation"
              className="navigation-mobile-close"
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
                <a href="#superpower-section">
                  <div className="navigation-mobile-link">
                    <span>Services</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#hero-quote-container">
                  <div className="navigation-mobile-link">
                    <span>Pricing</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#stats-section">
                  <div className="navigation-mobile-link">
                    <span>Super Stats</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#reviews-section">
                  <div className="navigation-mobile-link">
                    <span>Reviews</span>
                  </div>
                </a>
              </li>
            </ul>
            <div className="navigation-mobile-actions">
              <a href="#hero-quote-container">
                <div className="btn btn-xl navigation-mobile-cta navigation-cta-quote nav-mandarin-quote">
                  <span>Get Quote</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-root, .navigation-mobile-overlay, .navigation-mobile-link, .navigation-cta, .navigation-cta-quote, .navigation-brand-logo {
  transition: none !important;
  animation: none !important;
  transform: none !important;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="navigation-container4">
          <div className="navigation-container5">
            <Script
              html={`<script defer data-name="navigation-logic">
(function(){
  const navRoot = document.getElementById("navigation-root")
  const mobileToggle = document.getElementById("mobile-toggle")
  const mobileClose = document.getElementById("mobile-close")
  const mobileOverlay = document.getElementById("mobile-overlay")
  const mobileLinks = document.querySelectorAll(".navigation-mobile-link")

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navRoot.classList.add("is-scrolled")
      document.documentElement.classList.add("nav-scrolled")
    } else {
      navRoot.classList.remove("is-scrolled")
      document.documentElement.classList.remove("nav-scrolled")
    }
  }

  const openMobileMenu = () => {
    mobileOverlay.classList.add("is-active")
    mobileToggle.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden"
  }

  const closeMobileMenu = () => {
    mobileOverlay.classList.remove("is-active")
    mobileToggle.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
  }

  window.addEventListener("scroll", handleScroll)

  mobileToggle.addEventListener("click", openMobileMenu)
  mobileClose.addEventListener("click", closeMobileMenu)

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu)
  })

  mobileOverlay.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", closeMobileMenu)
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileOverlay.classList.contains("is-active")) {
      closeMobileMenu()
    }
  })

  handleScroll()
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
          .navigation-container4 {
            display: none;
          }
          .navigation-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation

import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Super Movers</title>
          <meta property="og:title" content="Super Movers" />
          <link
            rel="canonical"
            href="https://pink-feminine-louse-4bqc9w.teleporthq.site/"
          />
          <meta
            property="og:url"
            content="https://pink-feminine-louse-4bqc9w.teleporthq.site/"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-wizard-section">
          <div className="hero-video-wrapper">
            <video
              src="https://videos.pexels.com/video-files/7464151/7464151-hd_1920_1080_30fps.mp4"
              loop="true"
              muted="true"
              autoPlay="true"
              playsInline="true"
              className="hero-bg-video"
            ></video>
            <div className="hero-overlay-scrim"></div>
          </div>
          <div className="hero-content-container">
            <div className="hero-text-block">
              <h1 className="home-hero-title hero-title">
                Experience the Super Move Magic!
              </h1>
              <p className="hero-subtitle">
                Fast, friendly, and 3D-style moves that make relocation feel
                like a breeze.
              </p>
              <div className="floating-truck-visual">
                <img
                  alt="Super Movers Truck"
                  src="https://images.pexels.com/photos/9115461/pexels-photo-9115461.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="truck-3d-image"
                />
              </div>
            </div>
            <div id="hero-quote-container" className="wizard-card-wrapper">
              <div className="wizard-container">
                <div className="wizard-progress">
                  <div
                    id="wizardProgress"
                    className="home-thq-progress-bar-fill-elm progress-bar-fill"
                  ></div>
                </div>
                <form
                  id="superMoveForm"
                  data-form-id="ef44ae8a-bdbf-4ae8-9008-2b20bb7ba902"
                  className="wizard-form"
                >
                  <div data-step="1" className="wizard-step active">
                    <h3 className="wizard-step-title">What are we moving?</h3>
                    <div className="move-type-grid">
                      <label className="magnetic move-option-card">
                        <input
                          type="radio"
                          id="thq_movetype_iaTS"
                          name="moveType"
                          value="residential"
                          required="true"
                          data-form-field-id="thq_movetype_iaTS"
                        />
                        <div className="home-thq-move-option-content-elm1">
                          <svg
                            fill="none"
                            width="32"
                            xmlns="http://www.w3.org/2000/svg"
                            height="32"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                            <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          </svg>
                          <span>Home Move</span>
                        </div>
                      </label>
                      <label className="magnetic move-option-card">
                        <input
                          type="radio"
                          id="thq_movetype_Hs0I"
                          name="moveType"
                          value="office"
                          data-form-field-id="thq_movetype_Hs0I"
                        />
                        <div className="home-thq-move-option-content-elm2">
                          <svg
                            fill="none"
                            width="32"
                            xmlns="http://www.w3.org/2000/svg"
                            height="32"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              x="4"
                              y="2"
                              rx="2"
                              ry="2"
                              width="16"
                              height="20"
                            ></rect>
                            <path d="M9 22v-4h6v4"></path>
                            <path d="M8 6h.01"></path>
                            <path d="M16 6h.01"></path>
                            <path d="M8 10h.01"></path>
                            <path d="M16 10h.01"></path>
                            <path d="M8 14h.01"></path>
                            <path d="M16 14h.01"></path>
                          </svg>
                          <span>Office Move</span>
                        </div>
                      </label>
                    </div>
                    <button
                      id="thq_button_7SBn"
                      name="button"
                      type="button"
                      data-form-field-id="thq_button_7SBn"
                      className="btn next-step btn-primary"
                    >
                      Next Step
                    </button>
                  </div>
                  <div data-step="2" className="wizard-step">
                    <h3 className="wizard-step-title">When is the big day?</h3>
                    <div className="timeline-bubbles">
                      <label className="magnetic bubble-option">
                        <input
                          type="radio"
                          id="thq_timeline_BvB7"
                          name="timeline"
                          value="asap"
                          data-form-field-id="thq_timeline_BvB7"
                        />
                        <span>ASAP!</span>
                      </label>
                      <label className="magnetic bubble-option">
                        <input
                          type="radio"
                          id="thq_timeline_nUtD"
                          name="timeline"
                          value="this-month"
                          data-form-field-id="thq_timeline_nUtD"
                        />
                        <span>This Month</span>
                      </label>
                      <label className="magnetic bubble-option">
                        <input
                          type="radio"
                          id="thq_timeline_XCv-"
                          name="timeline"
                          value="planning"
                          data-form-field-id="thq_timeline_XCv-"
                        />
                        <span>Just Browsing</span>
                      </label>
                    </div>
                    <div className="wizard-nav-btns">
                      <button
                        id="thq_button_Ohfc"
                        name="button"
                        type="button"
                        data-form-field-id="thq_button_Ohfc"
                        className="btn prev-step btn-outline"
                      >
                        Back
                      </button>
                      <button
                        id="thq_button_-49J"
                        name="button"
                        type="button"
                        data-form-field-id="thq_button_-49J"
                        className="btn next-step btn-primary"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                  <div data-step="3" className="wizard-step">
                    <h3 className="wizard-step-title">Tell us more!</h3>
                    <textarea
                      id="thq_movedetails_5wml"
                      name="moveDetails"
                      placeholder="Any special items? Pianos, art, or 500 rubber ducks?"
                      data-form-field-id="thq_movedetails_5wml"
                      className="oversized-textarea"
                    ></textarea>
                    <div className="wizard-nav-btns">
                      <button
                        id="thq_button_FzOM"
                        name="button"
                        type="button"
                        data-form-field-id="thq_button_FzOM"
                        className="btn prev-step btn-outline"
                      >
                        Back
                      </button>
                      <button
                        id="thq_button_mbPX"
                        name="button"
                        type="button"
                        data-form-field-id="thq_button_mbPX"
                        className="btn next-step btn-primary"
                      >
                        Almost There
                      </button>
                    </div>
                  </div>
                  <div data-step="4" className="wizard-step">
                    <h3 className="wizard-step-title">
                      Who&apos;s the Super Client?
                    </h3>
                    <div className="input-group">
                      <input
                        type="text"
                        id="thq_clientname_ys24"
                        name="clientName"
                        required="true"
                        placeholder="Your Full Name"
                        data-form-field-id="thq_clientname_ys24"
                        className="wizard-input"
                      />
                    </div>
                    <div className="wizard-nav-btns">
                      <button
                        id="thq_button_mskW"
                        name="button"
                        type="button"
                        data-form-field-id="thq_button_mskW"
                        className="btn prev-step btn-outline"
                      >
                        Back
                      </button>
                      <button
                        id="thq_button_WKsn"
                        name="button"
                        type="button"
                        data-form-field-id="thq_button_WKsn"
                        className="btn next-step btn-primary"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                  <div data-step="5" className="wizard-step">
                    <h3 className="wizard-step-title">How can we reach you?</h3>
                    <p className="home-thq-section-content-elm10 section-content">
                      Email or Phone - your choice!
                    </p>
                    <div className="contact-logic-group">
                      <input
                        type="tel"
                        id="thq_clientphone_JZLO"
                        name="clientPhone"
                        placeholder="415-316-9809"
                        data-form-field-id="thq_clientphone_JZLO"
                        className="wizard-input"
                      />
                      <span className="or-divider">OR</span>
                      <input
                        type="email"
                        id="thq_clientemail_O30O"
                        name="clientEmail"
                        placeholder="super@movers.com"
                        data-form-field-id="thq_clientemail_O30O"
                        className="wizard-input"
                      />
                    </div>
                    <div className="wizard-nav-btns">
                      <button
                        id="thq_button_mADY"
                        name="button"
                        type="button"
                        data-form-field-id="thq_button_mADY"
                        className="btn prev-step btn-outline"
                      >
                        Back
                      </button>
                      <button
                        id="thq_button_8ufG"
                        name="button"
                        type="button"
                        data-form-field-id="thq_button_8ufG"
                        className="btn next-step btn-primary"
                      >
                        Review Move
                      </button>
                    </div>
                  </div>
                  <div data-step="6" className="wizard-step">
                    <h3 className="wizard-step-title">Ready for Takeoff!</h3>
                    <div className="summary-box">
                      <p className="section-content">
                        Everything looks super! Hit the button below and
                        we&apos;ll handle the heavy lifting.
                      </p>
                    </div>
                    <button
                      id="thq_button__NSN"
                      name="button"
                      type="submit"
                      data-form-field-id="thq_button__NSN"
                      className="btn btn-lg btn-accent pulse-animation"
                    >
                      Book My Super Move
                    </button>
                    <div className="home-thq-wizard-nav-btns-elm5 wizard-nav-btns">
                      <button
                        id="thq_button_wvfJ"
                        name="button"
                        type="button"
                        data-form-field-id="thq_button_wvfJ"
                        className="btn prev-step btn-link"
                      >
                        Edit Details
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section id="stats-section" className="super-stats-section">
          <div className="container-stats">
            <div className="stats-grid">
              <div className="magnetic stat-bubble">
                <div className="stat-icon-wrap">
                  <svg
                    fill="none"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                    <circle r="2" cx="17" cy="18"></circle>
                    <circle r="2" cx="7" cy="18"></circle>
                  </svg>
                </div>
                <div className="stat-content">
                  <span className="stat-number">5,000+</span>
                  <span className="stat-label">Successful Moves</span>
                </div>
              </div>
              <div className="magnetic stat-bubble">
                <div className="stat-icon-wrap">
                  <svg
                    fill="none"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </div>
                <div className="stat-content">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Satisfaction Rate</span>
                </div>
              </div>
              <div className="magnetic stat-bubble">
                <div className="stat-icon-wrap">
                  <svg
                    fill="none"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path>
                    <path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"></path>
                  </svg>
                </div>
                <div className="stat-content">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Super Support</span>
                </div>
              </div>
              <div className="magnetic stat-bubble">
                <div className="stat-icon-wrap">
                  <svg
                    fill="none"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle r="3" cx="12" cy="10"></circle>
                  </svg>
                </div>
                <div className="stat-content">
                  <span className="stat-number">Nationwide</span>
                  <span className="stat-label">Coverage Area</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="superpower-section" className="services-playful-section">
          <div className="services-header">
            <h2 className="section-title">Our Super Powers</h2>
            <p className="section-subtitle">
              We don&apos;t just move boxes, we move lives with style.
            </p>
          </div>
          <div className="services-grid">
            <div className="magnetic cobalt-card service-card">
              <div className="service-icon">
                <svg
                  fill="none"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
              </div>
              <h3 className="service-title">Local Moves</h3>
              <p className="section-content">
                Across the street or across town, we make local moving feel like
                a quick hop.
              </p>
            </div>
            <div className="magnetic service-card mint-card">
              <div className="service-icon">
                <svg
                  fill="none"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"></path>
                </svg>
              </div>
              <h3 className="service-title">Long Distance</h3>
              <p className="section-content">
                State lines are no match for our Super Fleet. Efficient,
                tracked, and safe.
              </p>
            </div>
            <div className="yellow-card magnetic service-card">
              <div className="service-icon">
                <svg
                  fill="none"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path>
                  <path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"></path>
                </svg>
              </div>
              <h3 className="service-title">Expert Packing</h3>
              <p className="section-content">
                We wrap your world in bubbles of safety. Fragile is our middle
                name.
              </p>
            </div>
            <div className="magnetic cobalt-card service-card">
              <div className="service-icon">
                <svg
                  fill="none"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" rx="2" width="18" height="18"></rect>
                  <path d="M3 9h18"></path>
                  <path d="M9 21V9"></path>
                  <path d="M15 21V9"></path>
                </svg>
              </div>
              <h3 className="service-title">Smart Storage</h3>
              <p className="section-content">
                Climate-controlled, secure, and ready when you are. Your
                items&apos; home away from home.
              </p>
            </div>
            <div className="magnetic service-card mint-card">
              <div className="service-icon">
                <svg
                  fill="none"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                  <circle r="2" cx="17" cy="18"></circle>
                  <circle r="2" cx="7" cy="18"></circle>
                </svg>
              </div>
              <h3 className="service-title">Piano Moving</h3>
              <p className="section-content">
                Grand pianos or uprights, we handle the heavy harmony with
                specialized gear.
              </p>
            </div>
            <div className="yellow-card magnetic service-card">
              <div className="service-icon">
                <svg
                  fill="none"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <h3 className="service-title">Last Minute</h3>
              <p className="section-content">
                Moving emergency? Our Super Crew is on standby for those ASAP
                relocations.
              </p>
            </div>
          </div>
        </section>
        <section id="process-section" className="process-preview-section">
          <div className="process-container">
            <h2 className="section-title">The Super 6-Step Path</h2>
            <div className="process-steps-row">
              <div className="magnetic process-step-bubble">
                <div className="step-num">
                  <span>1</span>
                </div>
                <span className="step-text">Pick Type</span>
              </div>
              <div className="process-connector"></div>
              <div className="magnetic process-step-bubble">
                <div className="step-num">
                  <span>2</span>
                </div>
                <span className="step-text">Set Date</span>
              </div>
              <div className="process-connector"></div>
              <div className="magnetic process-step-bubble">
                <div className="step-num">
                  <span>3</span>
                </div>
                <span className="step-text">Details</span>
              </div>
              <div className="process-connector"></div>
              <div className="magnetic process-step-bubble">
                <div className="step-num">
                  <span>4</span>
                </div>
                <span className="step-text">Identify</span>
              </div>
              <div className="process-connector"></div>
              <div className="magnetic process-step-bubble">
                <div className="step-num">
                  <span>5</span>
                </div>
                <span className="step-text">Contact</span>
              </div>
              <div className="process-connector"></div>
              <div className="magnetic process-step-bubble">
                <div className="step-num">
                  <span>6</span>
                </div>
                <span className="step-text">Book!</span>
              </div>
            </div>
          </div>
        </section>
        <section id="reviews-section" className="testimonials-carousel-section">
          <div className="carousel-container">
            <h2 className="section-title">Happy Super Movers</h2>
            <div id="testimonialTrack" className="testimonial-track">
              <div className="magnetic testimonial-bubble">
                <p className="section-content">
                  &quot;Super Movers lived up to the name! My 3rd floor
                  apartment was a nightmare, but they handled it with a smile
                  and zero scratches.&quot;
                </p>
                <span className="client-name">- Sarah J., San Francisco</span>
              </div>
              <div className="magnetic testimonial-bubble">
                <p className="section-content">
                  &quot;The quote wizard was so easy. I booked in 2 minutes and
                  the crew arrived exactly on time. 10/10 would move
                  again!&quot;
                </p>
                <span className="client-name">- Mark D., Austin</span>
              </div>
              <div className="magnetic testimonial-bubble">
                <p className="section-content">
                  &quot;I was worried about my vintage piano, but these guys are
                  true professionals. The 3D truck looked cool too!&quot;
                </p>
                <span className="client-name">- Elena R., Seattle</span>
              </div>
              <div className="magnetic testimonial-bubble">
                <p className="section-content">
                  &quot;Fastest move of my life. The team was energetic and
                  efficient. Super Yellow is now my favorite color!&quot;
                </p>
                <span className="client-name">- Kevin T., Denver</span>
              </div>
            </div>
            <div className="carousel-controls">
              <button id="prevTest" className="carousel-btn">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </button>
              <button id="nextTest" className="carousel-btn">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
        <section className="truck-showcase-section">
          <div className="container-showcase">
            <div className="magnetic showcase-card">
              <div className="video-container">
                <video
                  src="https://videos.pexels.com/video-files/31645401/13482461_640_360_30fps.mp4"
                  loop="true"
                  muted="true"
                  autoPlay="true"
                  playsInline="true"
                  className="showcase-video"
                ></video>
              </div>
              <div className="showcase-content">
                <h3 className="section-title">The Super Fleet in Action</h3>
                <p className="section-content">
                  Our 3D-styled trucks aren&apos;t just for show—they&apos;re
                  equipped with high-tech suspension and real-time tracking for
                  your peace of mind.
                </p>
              </div>
              <div className="neon-rim"></div>
            </div>
          </div>
        </section>
        <section className="pulsing-cta-section">
          <div className="cta-inner-container">
            <div className="cta-alert-box">
              <div className="cta-content">
                <h2 className="section-title">
                  Ready to Join the 5,000+ Happy Movers?
                </h2>
                <p className="section-content">
                  Get your instant quote now and experience 98% satisfaction
                  first-hand.
                </p>
              </div>
              <div className="cta-actions">
                <a href="#hero-quote-container">
                  <div className="btn btn-xl btn-accent pulse-animation">
                    <span>Book My Super Move</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
        @keyframes float {0%,100% {transform: translateY(0) rotate(0deg);}
50% {transform: translateY(-20px) rotate(2deg);}}@keyframes slideIn {from {opacity: 0;
transform: translateX(30px);}
to {opacity: 1;
transform: translateX(0);}}@keyframes pulse {0% {transform: scale(1);
box-shadow: 0 0 0 0 rgba(255, 214, 0, 0.7);}
70% {transform: scale(1.05);
box-shadow: 0 0 0 20px rgba(255, 214, 0, 0);}
100% {transform: scale(1);
box-shadow: 0 0 0 0 rgba(255, 214, 0, 0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<script defer data-name="super-movers-logic">
(function(){
  // Wizard Logic
  const wizardForm = document.getElementById("superMoveForm")
  const steps = document.querySelectorAll(".wizard-step")
  const progressBar = document.getElementById("wizardProgress")
  let currentStep = 1

  function updateWizard() {
    steps.forEach((step) => {
      step.classList.remove("active")
      if (parseInt(step.dataset.step) === currentStep) {
        step.classList.add("active")
      }
    })
    const progress = (currentStep / steps.length) * 100
    progressBar.style.width = \`\${progress}%\`
  }

  document.querySelectorAll(".next-step").forEach((btn) => {
    btn.addEventListener("click", () => {
      // Basic validation for required inputs in current step
      const currentStepEl = document.querySelector(\`.wizard-step[data-step="\${currentStep}"]\`)
      const inputs = currentStepEl.querySelectorAll("input[required], textarea[required]")
      let valid = true
      inputs.forEach((input) => {
        if (!input.value) {
          input.style.borderColor = "#e74c3c"
          valid = false
        } else {
          input.style.borderColor = "var(--color-border)"
        }
      })

      if (valid && currentStep < steps.length) {
        currentStep++
        updateWizard()
      }
    })
  })

  document.querySelectorAll(".prev-step").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (currentStep > 1) {
        currentStep--
        updateWizard()
      }
    })
  })

  // Testimonial Carousel
  const track = document.getElementById("testimonialTrack")
  let carouselIndex = 0

  document.getElementById("nextTest").addEventListener("click", () => {
    const bubbles = document.querySelectorAll(".testimonial-bubble")
    const max = window.innerWidth < 991 ? bubbles.length - 1 : bubbles.length / 2
    if (carouselIndex < max) {
      carouselIndex++
      track.style.transform = \`translateX(-\${carouselIndex * 50}%)\`
      if (window.innerWidth < 991) track.style.transform = \`translateX(-\${carouselIndex * 100}%)\`
    }
  })

  document.getElementById("prevTest").addEventListener("click", () => {
    if (carouselIndex > 0) {
      carouselIndex--
      track.style.transform = \`translateX(-\${carouselIndex * 50}%)\`
      if (window.innerWidth < 991) track.style.transform = \`translateX(-\${carouselIndex * 100}%)\`
    }
  })

  // Magnetic Hover Effect
  document.querySelectorAll(".magnetic").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      el.style.transform = \`scale(1.05) translate(\${x * 0.1}px, \${y * 0.1}px)\`
    })

    el.addEventListener("mouseleave", () => {
      el.style.transform = \`scale(1) translate(0, 0)\`
    })
  })

  // Form Submission Success (Visual Only)
  wizardForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const summaryStep = document.querySelector('.wizard-step[data-step="6"]')
    summaryStep.innerHTML = \`
    <div style="text-align: center; padding: 40px 0;">
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#00FF85" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 20px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      <h3 class="wizard-step-title">Super Booking Confirmed!</h3>
      <p class="section-content">Our crew is prepping the 3D truck. Check your inbox for the details!</p>
    </div>
  \`
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-thq-progress-bar-fill-elm {
            width: 16.66%;
          }
          .home-thq-move-option-content-elm1 {
            gap: var(--spacing-sm);
            color: var(--electric-cobalt);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-thq-move-option-content-elm2 {
            gap: var(--spacing-sm);
            color: var(--electric-cobalt);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-thq-section-content-elm10 {
            margin-bottom: var(--spacing-md);
          }
          .home-thq-wizard-nav-btns-elm5 {
            margin-top: var(--spacing-md);
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home

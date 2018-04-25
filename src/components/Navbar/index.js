import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div className="nav">
    <div className="nav-header">
      <div className="nav-title">
        <Link to="/">
          <strong>Stefan</strong>Đokić
        </Link>
      </div>
    </div>
    <div className="nav-btn">
      <label htmlFor="nav-check">
        <span />
        <span />
        <span />
      </label>
    </div>
    <input type="checkbox" id="nav-check" />
    <div className="nav-links">
      <Link to="/#projects">Projects</Link>
      <Link to="/blog/">Blog</Link>
      <a href="https://sdee3.com/Stefan-Djokic-CV.pdf">
        <button className="btn-outline" type="button">
          Download Resume
        </button>
      </a>
    </div>
  </div>
)

export default Header

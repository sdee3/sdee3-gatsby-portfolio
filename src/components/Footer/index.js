import React from 'react'
import Link from 'gatsby-link'

const Footer = () => {
  return (
    <footer>
      <div id="footer-content">
        <div id="contact-info">
          <ul>
            <li>
              <i className="fa fa-map-marker-alt fa-2x mr-3" />Belgrade, Serbia
            </li>
            <li>
              <i className="fa fa-envelope fa-2x mr-3" />
              <a href="mailto:stefandjokic@pm.me">stefandjokic@pm.me</a>
            </li>
          </ul>
        </div>
        <div id="social">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/stefd96"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f fa-2x" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/StefD96"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter fa-2x" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/cly__cly/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-2x" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/stefandjokic96/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-2x" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sdee3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-2x" />
              </a>
            </li>
          </ul>
        </div>
        <div id="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/#projects">Projects</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/#about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

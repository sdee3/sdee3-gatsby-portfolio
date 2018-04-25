import React from 'react'
import Link from 'gatsby-link'
import { siteMetadata } from '../../gatsby-config'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import emergence from 'emergence.js'

import './gatstrap.scss'

class Template extends React.Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const { location, children } = this.props
    return (
      <div>
        <Navbar /> {children()}
        <Footer />
      </div>
    )
  }
}

export default Template

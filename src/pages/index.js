import React from 'react'
import Link from 'gatsby-link'
import LazyLoad from 'react-lazyload'
import Helmet from 'react-helmet'
import ScrollToTop from 'react-scroll-up'

import HomeContent from '../components/HomeContent'

import '../layouts/style.css'
import BackToTopImage from '../../static/img/back-to-top.png'

const IndexPage = () => (
  <div>
    <Helmet>
      <title>Stefan Djokic | Portfolio</title>
      <meta
        name="description"
        content="Stefan Djokic - Software developer, content manager, digital marketing specialist. Welcome to the official portfolio website!"
      />
      <meta name="twitter:card" value="summary" />
      <meta name="twitter:site" content="@StefD96" />
      <meta
        name="twitter:title"
        content="Stefan Djokic | Software Developer, Content Manager Portfolio"
      />
      <meta
        name="twitter:description"
        content="Stefan Djokic is a sotware software developer, content manager, digital marketing specialist. Welcome to the official portfolio website!"
      />
      <meta name="twitter:creator" content="@StefD96" />
      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/sdee3-com/image/upload/v1515417514/stefan_djokic_ggtmnz.png"
      />
      {/* Open Graph data */}
      <meta
        property="og:title"
        content="Stefan Djokic | Software Developer, Content Manager Portfolio"
      />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://sdee3.com/" />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/sdee3-com/image/upload/v1515417514/stefan_djokic_ggtmnz.png"
      />
      <meta
        property="og:description"
        content="Stefan Djokic is a software software developer, content manager, digital marketing specialist. Welcome to the official portfolio website!"
      />
    </Helmet>
    <LazyLoad height={'100%'} offset={500} once={false}>
      <HomeContent />
    </LazyLoad>
    <ScrollToTop
      showUnder={160}
      style={{
        bottom: -3,
        right: 20,
      }}
    >
      <img src={BackToTopImage} />
    </ScrollToTop>
  </div>
)

export default IndexPage

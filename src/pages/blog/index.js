import React from 'react'
import MediaQuery from 'react-responsive'
import Link from 'gatsby-link'
import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'

import SitePost from '../../components/SitePost'

class BlogIndex extends React.Component {
  render() {
    const pageLinks = []
    const site = get(this, 'props.data.site.siteMetadata')
    const posts = get(this, 'props.data.remark.posts')

    posts.forEach((data, i) => {
      const layout = get(data, 'post.frontmatter.layout')
      const path = get(data, 'post.path')
      if (layout === 'post' && path !== '/404/') {
        pageLinks.push(
          <LazyLoad height={500} offset={500} once={true} key={i}>
            <SitePost data={data.post} site={site} isIndex={true} key={i} />
          </LazyLoad>
        )
      }
    })

    return (
      <div>
        <Helmet
          title={get(site, 'title')}
          meta={[
            {
              name: 'twitter:card',
              content: 'summary',
            },
            {
              name: 'twitter:site',
              content: `@${get(site, 'twitter')}`,
            },
            {
              property: 'og:title',
              content: get(site, 'title'),
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              property: 'og:description',
              content: get(site, 'description'),
            },
            {
              property: 'og:url',
              content: get(site, 'url'),
            },
            {
              property: 'og:image',
              content:
                'https://res.cloudinary.com/sdee3-com/image/upload/v1521535854/stefan_djokic_dzja6v.png',
            },
            {
              name: 'description',
              content: `${site.description}`,
            },
          ]}
        />
        <div
          className="p-5"
          style={{
            textAlign: 'center',
            background: '#222',
            height: '650px',
            color: '#eee',
          }}
        >
          <h2>Your next favorite blog - by Stefan Djokic</h2>
          <p className="mt-4" style={{}}>
            Here you can rely on quality content and everything related to my
            personal projects, thoughts on programming, marketing, and things my
            colleagues &amp; friends create for the sake of linkbuilding, our
            essence (which I fully support ♥). Expect cool posts with fun GIFs,
            nonetheless!
          </p>
          <img
            src="https://media.giphy.com/media/WOYKaXG2xJsBO/giphy.gif"
            alt="Start Reading Stefan Djokic Blog Rick and Morty"
          />
          <p style={{}}>
            <strong>Sidenote</strong>: Everything is sorted chronologically,
            just like any other epic{' '}
            <a
              href="https://www.gatsbyjs.org/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Gatsby
            </a>{' '}
            blog!
          </p>
          <MediaQuery query="(min-width: 775px)">
            <a
              href="#page-links"
              style={{
                textDecoration: 'none',
                color: '#eee',
              }}
            >
              <i className="mt-3 fas fa-chevron-down fa-2x" />
              <p>Start reading</p>
            </a>
          </MediaQuery>
        </div>
        <div id="page-links">{pageLinks}</div>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
      }
    }
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: edges {
        post: node {
          html
          frontmatter {
            layout
            title
            path
            categories
            description
            featuredImage
            date(formatString: "DD/MM/YYYY")
          }
        }
      }
    }
  }
`

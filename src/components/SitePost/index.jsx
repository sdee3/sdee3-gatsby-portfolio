import React from 'react'
import Link from 'gatsby-link'
import forEach from 'lodash/forEach'
import get from 'lodash/get'
import size from 'lodash/size'
import ReadNext from '../ReadNext'
import ScrollToTop from 'react-scroll-up'
import './style.scss'
import BackToTopImage from './../../../static/img/back-to-top.png'

class SitePost extends React.Component {
  more(path) {
    return (
      <Link className="readmore" to={path}>
        <span className="btn-outline-start-reading">Start reading</span>
      </Link>
    )
  }

  isMore(body) {
    return body.match('<!--more-->')
  }

  description(body) {
    let test = body.replace(/<blockquote>/g, '<blockquote class="blockquote">')
    if (test.match('<!--more-->')) {
      test = test.split('<!--more-->')
      if (typeof test[0] !== 'undefined') {
        return test[0]
      }
    }
    return test
  }

  categories(data) {
    const categories = []
    forEach(data, (item, i) => {
      categories.push(
        <span className="badge" key={i}>
          {item}
        </span>
      )
    })
    return categories
  }

  render() {
    const { site, data, isIndex } = this.props
    const title = get(data, 'frontmatter.title')
    const path = get(data, 'frontmatter.path')
    const date = get(data, 'frontmatter.date')
    const html = get(data, 'html')
    const description =
      get(data, 'frontmatter.featuredImage') || this.description(html)
    const cate =
      get(data, 'frontmatter.category') || get(data, 'frontmatter.categories')
    const isMore = isIndex && !!html.match('<!--more-->')

    return (
      <div className="container">
        <div className="articles col-md-12">
          <div className="article-wrap" key={path}>
            <div className="page-header">
              <Link style={{ boxShadow: 'none' }} to={path}>
                <h1>{title}</h1>
                <time dateTime={date}>{date}</time>
              </Link>
              {this.categories(cate)}
            </div>
            <div
              className="page-content"
              dangerouslySetInnerHTML={{
                __html: isMore
                  ? `<div style="text-align: center">
                      <img
                      src= ${description}
                      alt=${title}"
                      />
                    </div>`
                  : html,
              }}
            />
            {isMore ? this.more(path) : ''}
            {isIndex ? '' : <ReadNext data={site} />}
          </div>
        </div>
        <ScrollToTop showUnder={160} style={{ bottom: -3, right: 20 }}>
          <img src={BackToTopImage} />
        </ScrollToTop>
      </div>
    )
  }
}

export default SitePost

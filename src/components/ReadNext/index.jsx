import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import BlogIndex from '../../pages/index'
import './style.scss'

class ReadNext extends React.Component {
  render() {
    const data = this.props.data
    const title = get(data, 'meta.title')
    const author = get(data, 'meta.author')

    return (
      <div className="footer">
        <hr />
        <Link to="/blog/">
          <br />
          <button className="btn-blog-homepage">Blog Homepage</button>
          <br />
        </Link>
      </div>
    )
  }
}

export default ReadNext

import React from 'react'
import Link from 'gatsby-link'
import '../layouts/style.css'

const NotFoundPage = () => (
  <div style={{ width: '80%', textAlign: 'center', margin: '50px auto' }}>
    <h1>Whoops!</h1>
    <br />
    <p>You probably got lost. That's too bad.</p>
    <img
      src="https://media.giphy.com/media/d6bRMswt9miuQ/giphy.gif"
      style={{ height: 400 + 'px' }}
      alt="Lost Cat Hang In There GIF"
    />
    <p>
      Come back to the <Link to="/">Homepage</Link> and start over 🙏 🐈
    </p>
  </div>
)

export default NotFoundPage

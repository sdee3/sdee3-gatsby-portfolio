import React from 'react'
import Link from 'gatsby-link'

const HomeContent = () => {
  return (
    <div>
      <div id="top-section">
        <div id="top-section-content">
          <div id="profile-image">
            <img
              src="https://res.cloudinary.com/sdee3-com/image/upload/v1521535854/stefan_djokic_dzja6v.png"
              alt="Stefan Djokic"
            />
          </div>
          <div id="top-section-text">
            <h1>
              <strong>Stefan</strong>
              Đokić
            </h1>
            <span>
              <strong>Stefan</strong>Đokić
            </span>
            <p>Software Developer &#9679; Content Manager</p>
          </div>
        </div>
      </div>

      <div id="projects">
        <div className="card" id="project1">
          <div
            className="card-image"
            title="CryptInvest React NodeJS Java FX Project"
          />
          <div className="card-content">
            <h3 className="card-title">CryptInvest</h3>
            <p className="card-caption">
              A webapp built using React on the frontend, and NodeJS on the
              backend. Also accompanied with a Java FX app for verifying user
              registrations. On the frontend, CryptInvest is a simple user login
              &amp; register website that shows live cryptocurrency values.
            </p>
          </div>
        </div>
        <div className="card" id="project2">
          <div className="card-image" title="Music Store Java Console App" />
          <div className="card-content">
            <h3 className="card-title">Console Music Store</h3>
            <p className="card-caption">
              A Java + SQLite console app that serves as a CRUD music store app
              for viewing, updating, and deleting artists and their music.
              Regular users can view, add, update, or delete their favorite
              artists, albums, and / or songs to their private libraries.
            </p>
          </div>
        </div>
        <div className="card" id="project3">
          <div
            className="card-image"
            title="Mokranjatzz365Bet Android App Betting YouTube Demo Cover Image"
          />
          <div className="card-content">
            <h3 className="card-title">Mokranjatzz365Bet</h3>
            <p className="card-caption">
              An online betting store with multiple variations. A MATLAB GUI
              application was first, then came dedicated Android apps for both
              administrators and regular users, and finally, an official HTML +
              PHP website! We even made a demo video on{' '}
              <a
                href="https://www.youtube.com/watch?v=RD9phAJb-R8"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>!
            </p>
          </div>
        </div>
        <div className="card" id="project4">
          <div
            className="card-image"
            title="Squash 3D Android Video Game Unity3D"
          />
          <div className="card-content">
            <h3 className="card-title">Let's Play Squash! 3D</h3>
            <p className="card-caption">
              A 2012 senior year project made with C# inside of Unity, the best
              game engine on the market! This game took 4 months to make, and
              with a lot of bugs solved, at least the{' '}
              <a
                href="https://www.youtube.com/watch?v=uHJyAZtRrOY"
                target="_blank"
                rel="noopener noreferrer"
              >
                intro music
              </a>{' '}
              is on fire (credits to Riot Games and their DJ Sona skin for
              that)!
            </p>
          </div>
        </div>
      </div>

      <div id="blog-articles">
        <h2>The Latest Articles</h2>
        <div id="blog-articles-grid">
          <div className="card">
            <Link to="/blog/video-marketing-2018-infographic/">
              <div
                className="card-image-1"
                title="An EPIC Infographic On The State Of Video Marketing In 2018"
              />
              <div className="card-content">
                <h3 className="card-title">
                  An EPIC Infographic On The State Of Video Marketing In 2018
                </h3>
                <p className="card-caption">
                  The demand of people all over the globe for video-only content
                  is high. Being one of the most significant forms of content
                  marketing, video form is growing rapidly in the industry.
                </p>
              </div>
            </Link>
          </div>
          <div className="card">
            <Link to="/blog/what-makes-a-good-development-company/">
              <div
                className="card-image-2"
                title="What Makes a Good Development Company"
              />
              <div className="card-content">
                <h3 className="card-title">
                  What Makes a Good Development Company?
                </h3>
                <p className="card-caption">
                  It may seem surprising that web development companies are on
                  the uprise in 2018. Everybody onboard needs to be aware of
                  both the risks and the competition from day one.
                </p>
              </div>
            </Link>
          </div>
          <div className="card">
            <Link to="/blog/5-best-elearning-trends/">
              <div
                className="card-image-3"
                title="Best 5 E-Learning Trends To Watch Out For"
              />
              <div className="card-content">
                <h3 className="card-title">
                  5 E-Learning Trends To Watch Out For
                </h3>
                <p className="card-caption">
                  Cisco’s recent publication says that in 2021, one million
                  minutes of video will go through the Internet every second.
                  Video traffic made 73% of all data transferred over the
                  Internet in 2016...
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div id="blog-cta">
          <Link to="/blog/">
            <button className="btn-outline lg">Blog</button>
          </Link>
        </div>
      </div>
      <div id="about">
        <h2>About</h2>
        <div id="about-text">
          <p>
            Currently an engineering student, Java (Android) developer,
            full-stack web developer (specializing in Javascript &amp; React),
            and employed digital marketing specialist (content manager) at{' '}
            <a
              href="https://kickassgrowth.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              KickAssGrowth
            </a>. I am 21 years old, and although employed as a content manager,
            my focus is always directed towards getting the best out of both
            worlds - <strong>development and marketing</strong>. With quite a
            few projects under the sleeve during my schooling period, I'm always
            willing to help out my colleagues, both at work and school.
          </p>
          <p>
            With a good background of working with programming languages C, C++,
            C#, Java, JavaScript, remarkable understanding of the web
            development world (good knowledge of HTML5, CSS3, and the holy React
            library), as well as several years of continued Android development
            learning, I always keep an up-to-date collection of some of my best
            projects on my{' '}
            <a
              href="https://github.com/sdee3"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub page
            </a>.
          </p>
        </div>
        <div className="skills">
          <img
            src="https://res.cloudinary.com/sdee3-com/image/upload/c_scale,w_128/v1523354274/skills-icons/android-red.png"
            alt="Android App Development"
          />
          <img
            src="https://res.cloudinary.com/sdee3-com/image/upload/c_scale,w_121/v1523354274/skills-icons/csharp-red.png"
            alt="C# C Sharp App Development"
          />
          <img
            src="https://res.cloudinary.com/sdee3-com/image/upload/c_scale,w_128/v1523354274/skills-icons/js-red.png"
            alt="JavaScript Programming Web Development"
          />
          <img
            src="https://res.cloudinary.com/sdee3-com/image/upload/c_scale,w_128/v1523354274/skills-icons/java-red.png"
            alt="Java Desktop App Development"
          />
          <img
            src="https://res.cloudinary.com/sdee3-com/image/upload/c_scale,w_128/v1523354274/skills-icons/react-red.png"
            alt="React JS Library Development"
          />
        </div>
      </div>
    </div>
  )
}

export default HomeContent

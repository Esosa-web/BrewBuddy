import React from "react"

function About() {
  React.useEffect(() => {
    console.log("The About Page has mounted")
  }, [])

  return (
    <section className='about-section'>
      <div className="hero-body has-text-centered">
        <div className="container">
          <h1 className="title">
            About Page
          </h1>
          <p>This brewery search website was made by Esosa and Will for a project with General Assembly.<br/> We used the Open Brewery DB API to fetch the data.</p>
        </div>
      </div>
    </section>
  )
}

export default About

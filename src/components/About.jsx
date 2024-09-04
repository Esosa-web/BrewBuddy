import React from "react"

function About() {
  React.useEffect(() => {
    console.log("The About Page has mounted")
  }, [])

  return (
    <section className='about-section'>
      <div className="hero-body has-text-centered">
        <div className="container">
          <p className="title">
            About Page
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

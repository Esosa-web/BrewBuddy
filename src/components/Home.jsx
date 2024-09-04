import React from "react"

function Home() {
  React.useEffect(() => {
    console.log("The Home Page has mounted")
  }, [])

  return (
    <section className="hero is-link is-fullheight-with-navbar is-link">
          <p className="title">Home Page</p>
    </section>
  )
}

export default Home
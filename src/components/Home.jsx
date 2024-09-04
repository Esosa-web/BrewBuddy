import React from "react"

function Home() {
  React.useEffect(() => {
    console.log("The Home Page has mounted")
  }, [])

  return (
    <section className="home-section">
          <p className="title">Brew Buddy</p>
          
    </section>
  )
}

export default Home
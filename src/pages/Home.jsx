import React, {useState, useEffect} from "react";
import MovieContainer from "../components/MovieContainer";
import SeriesContainer from "../components/SeriesContainer";
import Loading from '../components/Loading'
import bgHero from '../Images/la-casa-de-papel-logo.png'

function Home() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  if(isLoading) {
    return <Loading />
  }
  return (
    <>
      <div>
        <div className="background-hero-home container-fluid mx-auto">
          <div className="hero ms-5 text-light d-flex flex-column align-content-center justify-content-center">
            <h1 className="text-size text-start">PEAKY BLINDERS</h1>
            <img className="object-fit" src={bgHero}/>
            <p className="">
            Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities.
            </p>
            <div className="mb-4">
              <span>2013</span>
              <button className="btn btn-outline-light ms-2 py-1 tv-s shadow">
                TV Series
              </button>
            </div>
            <div>
              <button className="btn btn-watch text-light py-2 px-5 fs-4 shadow">
                WATCH NOW!
              </button>
            </div>
          </div>
        </div>
      </div>
        <MovieContainer/>
        <SeriesContainer/>
    </>
  );
}

export default Home;

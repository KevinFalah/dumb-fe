import React, {useState, useEffect} from "react";
import MovieContainer from "../components/MovieContainer";
import SeriesContainer from "../components/SeriesContainer";
import Loading from '../components/Loading'

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
            <p className="">
              Peaky Blinders is an epic centred on a crime family of mixed Irish
              Catholic and Romani origins based in Birmingham, England, starting
              in 1919, several months after the end of the First World War in
              November 1918.
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

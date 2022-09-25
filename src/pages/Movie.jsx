import React, {useState, useEffect} from "react";
import MoviesContainer from "../components/MovieContainer";
import Loading from '../components/Loading'


const Movie = () => {

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
        <div className="background-hero-movie container-fluid mx-auto">
          <div className="hero ms-5 text-light d-flex flex-column align-content-center justify-content-center">
          <h1 className='text-size text-start'>GoodFellas</h1>
            <p className="">
            A young man grows up in the mob and works very hard to advance himself through the ranks. He enjoys his life of money and luxury, but is oblivious to the horror that he causes. A drug addiction and a few mistakes ultimately unravel his climb to the top.
            </p>
            <div className="mb-4">
              <span>2019</span>
              <button className="btn btn-outline-light ms-2 py-1 tv-s shadow">
                Movie
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
      <MoviesContainer />
    </>
  );
};

export default Movie;

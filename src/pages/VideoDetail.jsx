import React, { useEffect,useState, useContext } from "react";
import episode from '../Images/episode.jpg'
import {useParams } from "react-router-dom";
import {API} from '../config/api'
import { useQuery } from "react-query";
import Loading from '../components/Loading'
import {UserContext} from '../context/UserContext'

function VideoDetail() {

 
  const {id} = useParams()

  let {data : films} = useQuery('detailCache', async () => {
    const response = await API.get('/film/' + id);
    return response.data.data
  })

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
      <div className="d-flex justify-content-center">
        <iframe
          width="1000"
          height="500"
          src={films?.linkfilm}
          title="Peaky Blinders"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
        ></iframe>
      </div>

    <div className="d-flex justify-content-start sectionMain mt-5 flex-column flex-md-row">
      <div className="card mb-3 bg-black text-white" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={films?.thumbnailfilm} className="img-fluid rounded-start imgDummyDetail" alt="Series" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fs-2">{films?.title}</h5>
              <div className="mb-4 mt-2">
              <small className="text-muted">{films?.year}</small> 
              <small className='border border-secondary ms-2 px-1 ms-3 py-1 rounded text-muted tv-s shadow'>{films?.category.name}</small>
              </div>
              <p className="card-text pDetailMain">
                {films?.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="cardEpisode">
        {/* <div className="d-flex justify-content-end">
          <Button className="btn bg-danger text-white border-0 px-5 mt-2 mb-4" as={Link} to='/add-episode'>Add Episode</Button>
        </div> */}
        <img src={episode} alt="episode" className="imgEpisode" />
        <small className="text-light">{films?.title}</small>
      </div>
    </div>
    </>
  );
}

export default VideoDetail;

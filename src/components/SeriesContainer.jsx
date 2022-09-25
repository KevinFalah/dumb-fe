import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SeriesList from './SeriesList';
import {useQuery} from 'react-query'
import {API} from '../config/api'

function SeriesContainer() {

  let { data: films } = useQuery('seriesCache', async () => {
    const response = await API.get('/films');
    console.log("response film", response)

    const resultResponse = response.data.data

    const resultFilter = resultResponse.filter((e) => {
      if(e.category_id === 2) {
        return e.category_id === 2
      }
    })

    console.log(resultFilter)
    return resultFilter;
  });

  console.log(films);


  return (
    <div >
      <Container className="my-5 overflow-hidden" id="" >
        <h3 className="text-light">TV Series</h3>
        <Row>
          {films?.map((data, index) => {
            return(
                <Col md={2} key={index}>
                    <SeriesList 
                        id={data.id}
                        seriesImg={data.thumbnailfilm}
                        title={data.title}
                        year={data.year}
                    /> {/* Looping */}
                </Col>
            )
          })}
        </Row>
        </Container>
    </div>
  );
}

export default SeriesContainer;

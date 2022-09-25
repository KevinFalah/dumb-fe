import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function SeriesList({id, seriesImg, title, year}) {
  return (
    <Link to={`/video/${id}`} className='text-decoration-none'>
    <Card className='rounded border-0 bg-black text-white cardFilm'>
      <Card.Img variant="top" src={seriesImg} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p className='text-muted'>{year}</p>
      </Card.Body>
    </Card>
    </Link>
  );
}

export default SeriesList;
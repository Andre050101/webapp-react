import React from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
  const {id} = useParams();
  return <h1>Dettaglio del film {id}</h1>  
};

export default MovieDetail;
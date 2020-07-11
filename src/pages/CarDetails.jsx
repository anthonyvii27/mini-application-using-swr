import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';

export default function CarDetails() {
  const { id } = useParams();
  const { data } = useFetch(`cars/${id}`)

  if (!data) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <h1>{data?.name}</h1>
      <span>#{data?.id}</span>
    </>
  )
}

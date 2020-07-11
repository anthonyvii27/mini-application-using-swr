import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

import { Screen } from './styled';

export default function CarDetails() {
  const { id } = useParams();
  const { data } = useFetch(`cars/${id}`)

  if (!data) {
    return <p>Loading...</p>
  }

  return (
    <Screen>
      <h1>#{data?.id} - {data?.name}</h1>
    </Screen>
  )
}

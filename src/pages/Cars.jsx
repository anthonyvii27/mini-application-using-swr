import React from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useCallback } from 'react';
import { mutate as globalMutate } from 'swr';
import api from '../services/api';

export default function Cars() {
  const { data, mutate } = useFetch('cars');

  const setName = useCallback((id) => {
    api.put(`cars/${id}`, { name: 'Teste' });

    const updated = data?.map(user => {
      if (user.id === id) {
        return { ...user, name: 'Teste' }
      }

      return user;
    })

    mutate(updated, false);
    globalMutate(`cars/${id}`, { id, name: 'Teste' })
  }, [data, mutate])

  if (!data) {
    return <p>Carregando...</p>
  }

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>
          <Link to={`/profile/${user.id}`}>
            {user.name}
          </Link>
          <button onClick={() => setName(user.id)}>Alterar</button>
        </li>
      ))}
    </ul>
  )
}

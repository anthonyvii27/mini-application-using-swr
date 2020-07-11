import React from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { useCallback } from 'react';
import { mutate as globalMutate } from 'swr';
import api from '../../services/api';

import { Screen } from './styles';
import edit_icon from './edit.png';

export default function Cars() {
  const { data, mutate } = useFetch('cars');


  const setName = useCallback((id) => {
    const name = document.querySelector('#input-set-name').value;

    if (!name) {
      document.querySelector('#input-set-name').focus()
      return 
    }

    api.put(`cars/${id}`, { name })
    .catch(() => console.log('An error has occurred!'))

    const updated = data?.map(car => {
      if (car.id === id) 
        return { ...car, name }
      
      return car;
    })

    mutate(updated, false);
    globalMutate(`cars/${id}`, { id, name })
  }, [data, mutate])


  if (!data) {
    return <p>Loading...</p>
  }


  return (
    <Screen>
      <input 
        type="text" 
        id="input-set-name" 
        autoComplete="off"
        placeholder="New name *" />

      <ul>
        {data.map(car => (
          <li>
            <div>
              <h1>{ car.name }</h1>

              <Link to={`/profile/${ car.id }`} key={ car.id }>
                See more
              </Link>

              <button onClick={() => setName(car.id)}>
                <img src={edit_icon} alt="edit" />
              </button>
            </div>
          </li>
        ))}
      </ul>      
    </Screen>
  )
}

import { useState, useEffect } from 'react';

export function useFetchUsers(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setData(json));
  }, [url]);

  return data; // Devolvemos solo los datos que conseguimos
}
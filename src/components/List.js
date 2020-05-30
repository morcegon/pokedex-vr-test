import React, { useCallback, useState, useEffect } from 'react'
import { allPokemons } from '../services/api'

export default function List() {
  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = useCallback(async () => {
    const resp = await allPokemons()

    if (!resp.status) {
      setPokemons(resp.results)
    }
  }, [])

  useEffect(() => {
    fetchPokemons()
  }, [fetchPokemons])

  return <div className="list"></div>
}

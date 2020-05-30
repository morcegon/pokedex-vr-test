import React, { useCallback, useState, useEffect } from 'react'
import { allPokemons } from '../services/api'
import Card from './Card'

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

  const setUpCards = () =>
    pokemons.map((pokemon) => <Card key={pokemon.name} pokemon={pokemon} />)

  return (
    <div className="list list--grid">{pokemons.length && setUpCards()}</div>
  )
}

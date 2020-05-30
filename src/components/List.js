import React, { useCallback, useState, useEffect } from 'react'
import { allPokemons } from '../services/api'
import Card from './Card'
import Pagination from './Pagination'

export default function List() {
  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = useCallback(async () => {
    const resp = await allPokemons()

    console.log(resp)

    if (!resp.status) {
      setPokemons(resp.results)
    }
  }, [])

  const onClickNext = () => {}
  const onClickPrev = () => {}

  useEffect(() => {
    fetchPokemons()
  }, [fetchPokemons])

  const setUpCards = () =>
    pokemons.map((pokemon, index) => (
      <Card key={pokemon.name} index={index} pokemon={pokemon} />
    ))

  return (
    <section>
      <div className="list list--grid">{pokemons.length && setUpCards()}</div>
      <Pagination
        onClickPrev={() => onClickPrev()}
        onClickNext={() => onClickNext()}
      />
    </section>
  )
}

import React, { useCallback, useState, useEffect } from 'react'
import { allPokemons } from '../services/api'
import Card from './Card'
import Pagination from './Pagination'

export default function List() {
  const [pokemons, setPokemons] = useState([])
  const [fetchParams, setFetchParams] = useState({
    offset: 0,
    limit: 50,
  })

  const fetchPokemons = useCallback(async () => {
    const resp = await allPokemons(fetchParams.offset, fetchParams.limit)

    if (!resp.status) {
      setPokemons(resp.results)
    }
  }, [fetchParams])

  const onClickNext = () => {
    const offset = fetchParams.offset + fetchParams.limit
    setFetchParams({ ...fetchParams, offset })
  }
  const onClickPrev = () => {
    if (fetchParams.offset > 0) {
      const offset = fetchParams.offset - fetchParams.limit
      setFetchParams({ ...fetchParams, offset })
    }
  }

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
        disablePrev={fetchParams.offset === 0}
        onClickPrev={() => onClickPrev()}
        onClickNext={() => onClickNext()}
      />
    </section>
  )
}

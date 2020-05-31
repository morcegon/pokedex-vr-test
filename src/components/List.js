import React, { useCallback, useState, useEffect, useContext } from 'react'
import { allPokemons } from '../services/api'
import Card from './Card'
import Pagination from './Pagination'

import Loading from './Loading'

import PropTypes from 'prop-types'

import context from './AppContext'

export default function List({ keyword }) {
  const [loading, setLoading] = useState(true)
  const [pokemons, setPokemons] = useState([])
  const [error, setError] = useState(null)
  const [fetchParams, setFetchParams] = useState({
    offset: 0,
    limit: 50,
  })

  const { setKeyword } = useContext(context)

  const fetchPokemons = useCallback(async () => {
    setLoading(true)

    const resp = await allPokemons(
      fetchParams.offset,
      fetchParams.limit,
      keyword,
    )

    setLoading(false)

    if (resp.status) {
      if (resp.status === 404) {
        setError(
          "There's no pokémon with this keyword or number. Please, try again.",
        )
      }
      return
    }

    if (resp.id) {
      setPokemons([resp])
      return
    }

    setPokemons(resp.results)
  }, [fetchParams, keyword])

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
      <div className="list list--grid">
        {loading && <Loading />}
        {!loading && !error && setUpCards()}
        {!loading && error && <div className="error">{error}</div>}
      </div>
      {pokemons.length > 1 && (
        <Pagination
          disablePrev={fetchParams.offset === 0}
          onClickPrev={() => onClickPrev()}
          onClickNext={() => onClickNext()}
        />
      )}

      {pokemons.length === 1 && (
        <button type="button" onClick={() => setKeyword(null)}>
          Return to List
        </button>
      )}
    </section>
  )
}

List.propTypes = {
  keyword: PropTypes.string,
}

List.defaultProps = {
  keyword: null,
}

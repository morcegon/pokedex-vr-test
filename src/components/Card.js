import React, { useEffect, useState, useContext } from 'react'
import { pad } from '../shared/helpers'

import PropTypes from 'prop-types'

import context from './AppContext'

export default function Card({ pokemon, index }) {
  const [id, setId] = useState(null)
  const [image, setImage] = useState(null)

  const { setDetail } = useContext(context)

  const getPokemonId = (url) => {
    const parsed = url.split('/')
    const filtered = parsed.filter((item) => item)

    return filtered[filtered.length - 1]
  }

  const setUpPicture = (id) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  }

  useEffect(() => {
    const id = getPokemonId(pokemon.url)
    setId(id)
    setImage(setUpPicture(id))
  }, [pokemon])

  return (
    <div
      onClick={() => setDetail({ show: true, pokemonId: id })}
      tabIndex={index + 1}
      className="card">
      <picture className="card__image">
        <img src={image} alt={pokemon.name} title={pokemon.name} />
      </picture>
      <div className="card__name">{pokemon.name}</div>
    </div>
  )
}

Card.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
}

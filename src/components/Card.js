import React, { useEffect, useState } from 'react'
import { pad } from '../shared/helpers'

import PropTypes from 'prop-types'

export default function Card({ pokemon, index }) {
  const [id, setId] = useState(null)
  const [image, setImage] = useState(null)

  const getPokemonId = (url) => {
    const parsed = url.split('/')
    const filtered = parsed.filter((item) => item)

    return filtered[filtered.length - 1]
  }

  const setUpPicture = (id) => {
    const imageId = pad(id, 3)
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`
  }

  useEffect(() => {
    const id = getPokemonId(pokemon.url)
    setId(id)
    setImage(setUpPicture(id))
  }, [pokemon])

  return (
    <div tabIndex={index + 1} className="card">
      <span className="card__number">#{id}</span>
      <picture className="card__image">
        <img src={image} alt="" />
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

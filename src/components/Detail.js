import React, { useContext, useCallback, useState, useEffect } from 'react'
import context from './AppContext'
import { pokemonDetail } from '../services/api'

import { RiCloseLine } from 'react-icons/ri'
import { pad } from '../shared/helpers'

export default function Detail() {
  const { detail, setDetail } = useContext(context)
  const [pokemon, setPokemon] = useState(false)

  const fetchDetails = useCallback(async () => {
    const resp = await pokemonDetail(detail.pokemonId)

    console.log(resp)

    if (!resp.status) {
      setPokemon(resp)
    }
  }, [detail])

  useEffect(() => {
    fetchDetails()
  }, [fetchDetails])

  const setUpPicture = (id) => {
    const imageId = pad(id, 3)
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`
  }

  const showTypes = (types) =>
    types.map((type) => (
      <span
        key={type.slot}
        className={`pokemon__types-item pokemon__types-item--${type.type.name}`}
        title={type.type.name}></span>
    ))

  return (
    <div
      className="detail"
      onClick={() => setDetail({ ...detail, show: false })}>
      <div className="detail__modal">
        {pokemon && (
          <div className="pokemon">
            <div className="pokemon__header">
              <span className="pokemon__number">#{pokemon.id}</span>
              <span className="pokemon__name">{pokemon.name}</span>
              <button
                type="button"
                onClick={() => setDetail({ ...detail, show: false })}
                className="detail__modal-close">
                <RiCloseLine />
              </button>
            </div>

            <div className="pokemon__body">
              <picture className="pokemon__image">
                <img src={setUpPicture(pokemon.id)} alt={pokemon.name} />
              </picture>

              <div className="pokemon__types">{showTypes(pokemon.types)}</div>

              <div className="pokemon__feature">
                <div className="pokemon__feature-item">
                  <strong>Height:</strong> {pokemon.height / 10}m
                </div>
                <div className="pokemon__feature-item">
                  <strong>Weight:</strong> {pokemon.weight / 10}kg
                </div>

                {pokemon.stats.map((stat) => (
                  <div className="pokemon__feature-item">
                    <strong>{stat.stat.name}:</strong> {stat.base_stat}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

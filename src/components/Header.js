import React from 'react'

import PokedexIcon from '../images/pokedex.svg'

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <div className="header__logo-image">
          <img src={PokedexIcon} alt="Pokédex" />
        </div>
        <h1 className="header__logo-title">Pokédex</h1>
      </div>
    </header>
  )
}

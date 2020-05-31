import React, { useState, useContext } from 'react'
import { FaSearch } from 'react-icons/fa'
import context from './AppContext'

export default function Search() {
  const [input, setInput] = useState('')

  const { setKeyword } = useContext(context)

  const submitForm = (e) => {
    e.preventDefault()
    setKeyword(input)
  }

  return (
    <div className="search">
      <form onSubmit={submitForm} className="search__form">
        <input
          type="text"
          className="search__input"
          placeholder="Search by pokémon name or number"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button type="submit" className="search__button">
          <FaSearch />
        </button>
      </form>
    </div>
  )
}

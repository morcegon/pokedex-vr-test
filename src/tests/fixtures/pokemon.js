const baseUrl = process.env.REACT_APP_API_URL

const pokemonList = [
  {
    name: 'bulbasaur',
    id: `${baseUrl}/pokemon/1`,
  },
  {
    name: 'ivysaur',
    id: `${baseUrl}/pokemon/2`,
  },
]

export const list = {
  count: pokemonList.length,
  next: `${baseUrl}/pokemon/?offset=20&limit20`,
  previous: null,
  results: pokemonList,
}

export const detail = {
  id: 10,
  abilities: [],
  base_experience: 64,
  forms: [],
  game_indices: [],
  height: 6,
  held_items: [],
  is_default: true,
}

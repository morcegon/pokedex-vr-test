import axios from 'axios'

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
})

export const allPokemons = async (offset = 0, limit = 20) => {
  try {
    const resp = await instance.get('/pokemon', {
      params: {
        offset,
        limit,
      },
    })
    return resp.data
  } catch (err) {
    return err.response
  }
}

export const pokemonDetail = async (id) => {
  try {
    const resp = await instance.get(`/pokemon/${id}`)
    return resp.data
  } catch (err) {
    return err.response
  }
}

import { instance, allPokemons, pokemonDetail } from '../../services/api'
import MockAdapter from 'axios-mock-adapter'
import { list, detail } from '../fixtures/pokemon'

const mock = new MockAdapter(instance)

describe('Pokemon API', () => {
  it('can fetch the pokemon paginated list', async () => {
    expect.hasAssertions()

    mock.onGet('/pokemon').reply(200, list)

    const resp = await allPokemons()

    expect(resp).toStrictEqual(list)
  })

  it('can fetch a pokemon details', async () => {
    expect.hasAssertions()

    mock.onGet('/pokemon/1').reply(200, detail)

    const resp = await pokemonDetail(1)

    expect(resp).toStrictEqual(detail)
  })

  it('can return error when using a non existing pokemon ID', async () => {
    expect.hasAssertions()

    const id = 0

    mock.onGet(`/pokemon/${id}`).reply(404)

    const resp = await pokemonDetail(id)

    expect(resp.status).toEqual(404)
  })
})

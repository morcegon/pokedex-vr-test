import React, { useState } from 'react'
import Layout from './components/Layout'
import Header from './components/Header'
import List from './components/List'
import Detail from './components/Detail'

import Context from './components/AppContext'

export default function App() {
  const [detail, setDetail] = useState({
    show: false,
    pokemonId: null,
  })

  const [keyword, setKeyword] = useState(null)

  return (
    <div>
      <Layout>
        <Context.Provider value={{ detail, setDetail, setKeyword }}>
          <Header />
          <List keyword={keyword} />
          {detail.show && <Detail />}
        </Context.Provider>
      </Layout>
    </div>
  )
}

import React from 'react'
import Layout from './components/Layout'
import Header from './components/Header'
import List from './components/List'

export default function App() {
  return (
    <div>
      <Layout>
        <Header />
        <List />
      </Layout>
    </div>
  )
}

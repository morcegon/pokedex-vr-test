import React from 'react'

import '../scss/app.scss'

import PropTypes from 'prop-types'

export default function Layout({ children }) {
  return <div class="container">{children}</div>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

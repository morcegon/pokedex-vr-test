import React from 'react'

import PropTypes from 'prop-types'

export default function Card({ pokemon }) {
  return <div className="card"></div>
}

Card.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
}

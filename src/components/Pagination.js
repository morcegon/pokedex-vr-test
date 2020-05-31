import React from 'react'

import PropTypes from 'prop-types'

export default function Pagination({ onClickNext, onClickPrev, disablePrev }) {
  return (
    <div className="pagination">
      <button
        type="button"
        onClick={() => onClickPrev()}
        className="pagination__button"
        disabled={disablePrev}>
        Prev
      </button>
      <button
        type="button"
        onClick={() => onClickNext()}
        className="pagination__button">
        Next
      </button>
    </div>
  )
}

Pagination.propTypes = {
  onClickNext: PropTypes.func.isRequired,
  onClickPrev: PropTypes.func.isRequired,
  disablePrev: PropTypes.bool.isRequired,
}

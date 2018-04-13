import React from 'react'
import PropTypes from 'prop-types'

const VisualTile = (props) => (
        <button>({props.x},{props.y})</button>
)

// VisualTile.propTypes = {
//   x: PropTypes.number.isRequired,
//   y: PropTypes.number.isRequired
// }

export default VisualTile
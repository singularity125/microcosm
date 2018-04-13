import React from 'react'
import PropTypes from 'prop-types'

const TileDetails = (props) => (
  (props.tile ? 
  <div>
    <h2>({props.tile.x},{props.tile.y})</h2>
    <p>Trees: {props.tile.trees}</p>
    <p>Animals: {props.tile.animals}</p>
    <p>Minerals: {props.tile.minerals}</p>
  </div>
  : <div>N/A
    </div>
  )
)

export default TileDetails
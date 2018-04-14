import React from 'react'
import { BASE_TILE } from '../reducers/gameMap'
import PropTypes from 'prop-types'

class TileDetails extends React.Component {
  render() {
    var tiledetails = [];
    if (this.props.tile) {
      tiledetails.push(
        <div>
          <h2>({this.props.tile.x},{this.props.tile.y})</h2>
          <p>Trees: {this.props.tile.trees}</p>
          <p>Animals: {this.props.tile.animals}</p>
          <p>Minerals: {this.props.tile.minerals}</p>
        </div>
      )
      if (this.props.tile.type === BASE_TILE) {
        tiledetails.push(
          <div>
            <h2>This is your home base</h2>
          </div>
        )
      }
      return tiledetails;
    } else {
      return(<div>N/A</div>)
    }
  }
}

export default TileDetails
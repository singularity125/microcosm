import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BASE_TILE } from '../reducers/gameMap';

//const VisualTile = (props) => (
class VisualTile extends Component {


  handleClick = () => {
     this.props.dispatch(this.props.onClick(this.props.x, this.props.y))
  }

  getTileGraphic(tile) {
    switch (Math.max(tile.trees, tile.animals, tile.minerals, tile.vegetation, tile.water / 10)) {
      case tile.trees:
        return '🌲';
      case tile.animals:
        return '🐇';
      case tile.minerals:
        return '⛰️';
      case tile.vegetation:
        return '🥕'
      case tile.water/10:
        return '💧'
      default:
        return '?'
    }
  }

  render() {

    var tileGraphic = this.getTileGraphic(this.props.tile)

    if (this.props.tile.type === BASE_TILE) {
      tileGraphic = '🏠';
    }

    return (
      <button className='mapTileButton' key={this.props.key} onClick={this.handleClick}>{tileGraphic}</button>
    )
  }
}

// VisualTile.propTypes = {
//   x: PropTypes.number.isRequired,
//   y: PropTypes.number.isRequired
// }

export default VisualTile
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BASE_TILE } from '../reducers/gameMap';

//const VisualTile = (props) => (
class VisualTile extends Component {
  handleClick = () => {
     this.props.dispatch(this.props.onClick(this.props.x, this.props.y))
  }

  render() {
    var tileGraphic = '_';
    if (this.props.tile.trees > this.props.tile.animals &&
    this.props.tile.trees > this.props.tile.minerals)
    {
      tileGraphic = '🌲';
    }
    if (this.props.tile.animals > this.props.tile.trees &&
      this.props.tile.animals > this.props.tile.minerals)
    {
      tileGraphic = '🐇';
    }
    if (this.props.tile.minerals > this.props.tile.animals &&
      this.props.tile.minerals > this.props.tile.trees)
    {
      tileGraphic = '⛰️';
    }
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
import React, {Component} from 'react'
import TileDetailsContainer from '../containers/TileDetailsContainer';

class RightMenu extends Component {

  render() {
    return (
    <div className="TileDetails-div">
      <h1 className="TileDetails-header">Tile Details:</h1>
      <TileDetailsContainer />
    </div>
    )
  }
}

export default RightMenu
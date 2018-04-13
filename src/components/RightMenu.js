import React, {Component} from 'react'
import TileDetails from './TileDetails';

class RightMenu extends Component {

  render() {
    // if (!this.props.selectedTile) {
    //   return (
    //     <div className="TileDetails-div">
    //       <h1 className="TileDetails-header">Tile Details:</h1>
    //       <h1>N/A (Select a tile first!)</h1>
    //     </div>          
    //   );
    // }
    return (
    <div className="TileDetails-div">
      <h1 className="TileDetails-header">Tile Details:</h1>
      <TileDetails tile={this.props.selectedTile} />
    </div>
    )
  }
}

export default RightMenu
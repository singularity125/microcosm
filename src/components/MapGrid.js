import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TileContainer from '../containers/TileContainer';

class MapGrid extends Component {

  // onTileClick = (tile) => {
  //   this.props.onTileClick(tile)
  // }

  componentWillMount() {
    //this.dispatch.createMap(5,5,123)
  }

  constructor(props) {
    super(props)
  }

  render() {
  let mapGrid = [];
  for(var i = 0; i < this.props.height; i++) {
    let rowJsx = [];
    for(var j = 0; j < this.props.width; j++) {
      let coord = {x: j, y: i}
    rowJsx.push(<TileContainer key={j+","+i} x={j} y={i} 
      onClick={() => this.props.tileDetails(coord.x,coord.y)} />);
    }
    //rowJsx = {rowJsx}</tr>;
    mapGrid.push(<div key={"mapRow_"+i}>{rowJsx}</div>)
  }

  return (
  <div className='gameMap'>
    {mapGrid}
  </div>
  );
};
}

export default MapGrid
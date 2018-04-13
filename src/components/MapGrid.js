import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TileContainer from '../containers/TileContainer';

class MapGrid extends Component {

  constructor(props) {
    super(props)
  }

  render() {
  let mapGrid = [];
  for(var i = 0; i < this.props.height; i++) {
    let rowJsx = [];
    for(var j = 0; j < this.props.width; j++) {
      //let mytile = this.props.tilemap.get({x: j, y: i});
    rowJsx.push(<TileContainer key={j+","+i} x={j} y={i} />);
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
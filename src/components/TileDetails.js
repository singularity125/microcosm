import React, {Component} from 'react'
import { BASE_TILE } from '../reducers/gameMap'
import PropTypes from 'prop-types'

class TileDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lastTrees: this.props.tile.trees,
      lastAnimals: this.props.tile.animals,
      lastMinerals: this.props.tile.minerals,
      lastVegetation: this.props.tile.vegetation,
      lastWater: this.props.tile.water
    }
  }

  render() {
    var tiledetails = [];
    if (this.props.tile) {
      const treeChange = (2, this.props.tile.trees - this.state.lastTrees).toFixed(2)
      const animalChange = (this.props.tile.animals - this.state.lastAnimals).toFixed(2)
      const mineralChange = (this.props.tile.minerals - this.state.lastMinerals).toFixed(2)
      const vegetationChange = (this.props.tile.vegetation - this.state.lastVegetation).toFixed(2)
      const waterChange = (this.props.tile.water - this.state.lastWater).toFixed(2)
  
      this.state.lastTrees = this.props.tile.trees
      this.state.lastAnimals = this.props.tile.animals
      this.state.lastMinerals = this.props.tile.minerals
      this.state.lastVegetation = this.props.tile.vegetation
      this.state.lastWater = this.props.tile.water
  
      tiledetails.push(
        <div key='rawResources'>
          <h2>({this.props.tile.x},{this.props.tile.y})</h2>
          <p>Trees: {Math.floor(this.props.tile.trees)} / {Math.floor(this.props.tile.treesSpace)} ({treeChange} / sec)</p>
          <p>Animals: {Math.floor(this.props.tile.animals)} / {Math.floor(this.props.tile.animalsSpace)} ({animalChange} / sec)</p>
          <p>Minerals: {Math.floor(this.props.tile.minerals)} / {Math.floor(this.props.tile.mineralsSpace)} ({mineralChange} / sec)</p>
          <p>Vegetation: {Math.floor(this.props.tile.vegetation)} / {Math.floor(this.props.tile.vegetationSpace)} ({vegetationChange} / sec)</p>
          <p>Water: {Math.floor(this.props.tile.water)} / {Math.floor(this.props.tile.waterSpace)} ({waterChange} / sec)</p>
        </div>
      )
      if (this.props.tile.type === BASE_TILE) {
        tiledetails.push(
          <div key='tileBuilding'>
            <h2>This is your home base</h2>
          </div>
        )
      }
      return tiledetails;
    } else {
      return(<div>N/A</div>)
    }
  }

   componentDidMount() {
     //this.interval = setInterval(() => this.forceUpdate(),200)
   };
}

export default TileDetails
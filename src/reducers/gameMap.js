import { CREATE_MAP } from '../actions'
const { Map } = require('immutable')

function createTerrainMap(width, height, seed) {
    var seedrandom = require('seedrandom')
    var myrng = seedrandom(seed);
    var terrainMap = Map();
    //3 resources for now: trees, animals, minerals
    for (var i = 0; i < height; i++) {
      for (var j = 0; j < width; j++) {
        var myKey = j+","+i;
        var myTile = {
          //id: toString(i)+","+toString(j),
          x: j,
          y: i,
          trees: Math.abs(myrng.int32() % 10000),
          animals: Math.abs(myrng.int32() % 10000),
          minerals: Math.abs(myrng.int32() % 10000)
        };
        terrainMap = terrainMap.set(myKey, myTile)
      }
    }
    return terrainMap;
}

const initialState = {
  width: 5,
  height: 5,
  tilemap: createTerrainMap(5,5,123)
}

function gameMap(state = initialState, action) {
    switch (action.type) {
      case CREATE_MAP:
      //Use seed of 123 for now
        let rng = 123;
        
        //return {...state, terrainMap: createTerrainMap(5,5, rng)}
        return { 
          ...state,
          width: action.data.width,
          height: action.data.height,
          tileMap: createTerrainMap(action.data.width,action.data.height, action.data.seed),
        }
      default:
        return state;
    }
}

export default gameMap
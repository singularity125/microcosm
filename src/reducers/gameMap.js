import { CREATE_MAP,
TILE_DETAILS } from '../actions'
const { Map, set } = require('immutable')

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

const newGameMap = Map({
  width: 5,
  height: 5,
  tilemap: createTerrainMap(5,5,123),
  selectedTile: null
})

function gameMap(state = newGameMap, action) {
    switch (action.type) {
      case CREATE_MAP:
      //Use seed of 123 for now
        let rng = 123;
        let tilemap = createTerrainMap(action.data.width,action.data.height, action.data.seed)
        
        //return {...state, terrainMap: createTerrainMap(5,5, rng)}
        return state.withMutations(state => { 
          state.set("width", action.data.width)
          .set("height", action.data.height)
          .set("tilemap", tilemap)
          .set("selectedTile", tilemap.get("0,0"))
        })
      case TILE_DETAILS:
        let tiledetail = state.get("tilemap").get(action.tile.x+","+action.tile.y)
        return state.set("selectedTile", tiledetail)
      default:
        return state;
    }
}

export default gameMap
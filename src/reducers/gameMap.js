import { CREATE_MAP,
TILE_DETAILS, UPDATE_TICK } from '../actions'
import produce from "immer"

export const EMPTY_TILE = "EMPTY_TILE"
export const BASE_TILE = "BASE_TILE"

function generateTile(x, y, type, myrng) {
  //calculate space for all the resource types
  //for now use 10000 space total
  var freeSpace = 10000
  var treesSpace = Math.abs(myrng.int32() % freeSpace *0.75)
  freeSpace -= treesSpace;
  treesSpace *= 10;
  var animalsSpace = Math.abs(myrng.int32() % freeSpace *0.75)
  freeSpace -= animalsSpace;
  animalsSpace *= 5;
  var mineralsSpace = Math.abs(myrng.int32() % freeSpace *0.75)
  freeSpace -= mineralsSpace;
  mineralsSpace *= 50;
  var vegetationSpace = Math.abs(myrng.int32() % freeSpace *0.75)
  freeSpace -= vegetationSpace;
  vegetationSpace *= 50
  var waterSpace = freeSpace * 100
  var myKey = x+","+y;
  //For now each tile has 50-100% of their resource
  //(Minerals always 100% since it can't go up)
  var myTile = {
    //id: toString(i)+","+toString(j),
    x: x,
    y: y,
    trees: Math.abs(myrng.int32() % (treesSpace/2))+treesSpace/2,
    treesSpace: treesSpace,
    animals: Math.abs(myrng.int32() % (animalsSpace/2))+animalsSpace/2,
    animalsSpace: animalsSpace,
    minerals: mineralsSpace,
    mineralsSpace: mineralsSpace,
    vegetation: (Math.abs(myrng.int32() % (vegetationSpace/2))+vegetationSpace/2),
    vegetationSpace: vegetationSpace,
    water: (Math.abs(myrng.int32() % (waterSpace/2))+waterSpace/2),
    waterSpace: waterSpace,
    type: type
  };
  return myTile
}

function createTerrainMap(width, height, seed) {
    var seedrandom = require('seedrandom')
    var myrng = seedrandom(seed);
//    var terrainMap = Map();
var terrainMap = [];
    //determine the base tile
    var basex = Math.floor((width/2)+(myrng.int32() % (width/4)));
    var basey = Math.floor((height/2)+(myrng.int32() % (height/4)));

    console.log("X,Y "+basex+","+basey)

    //3 resources for now: trees, animals, minerals
    for (var i = 0; i < height; i++) {
      var terrainRow = []
      for (var j = 0; j < width; j++) {
        var tile = generateTile(j, i, (basex === j && basey === i ? BASE_TILE : EMPTY_TILE), myrng)
        terrainRow.push(tile)
      }
      terrainMap.push(terrainRow)
    }
    return terrainMap;
}

const newGameMap = ({
  width: 10,
  height: 10,
  tilemap: createTerrainMap(10,10,123),
  selectedTile: {x:0,y:0},
  lastTick: new Date(),
  oxygen: 500000,
  otherair: 4500000,
  co2: 5000000
})

const gameMap = produce(
  (draft, action) => {
    switch (action.type) {
      case CREATE_MAP:
      //Use seed of 123 for now
        let rng = 123;
        let tilemap = createTerrainMap(action.data.width,action.data.height, action.data.seed)
        draft.width = action.data.width
        draft.height = action.data.height
        draft.tilemap = tilemap
        draft.selectedTile = tilemap[0][0]
        break;
      case TILE_DETAILS:
        draft.selectedTile = draft["tilemap"][action.tile.y][action.tile.x]
        break;
      case UPDATE_TICK:
        var timediff = action.time.getTime() - draft["lastTick"].getTime();
        var timeinticks = (timediff / 1000)
        //console.log("Timediff in ticks: " + timeinticks)
        var totalO2 = 0;
        var totalCO2 = 0;

        draft.tilemap.forEach((row) => {
          row.forEach((tile) => {
          //First calculate deltas and account for missing reqs
          totalO2 += ((0.000005*tile.trees + 0.000001*tile.vegetation - 0.0001*tile.animals) * timeinticks)
          totalCO2 = totalCO2 + ((-0.000005*tile.trees - 0.000001*tile.vegetation
            + 0.0001*tile.animals) * timeinticks)
          
          var treeChange = (0.00001*tile.trees * timeinticks) 
          var animalsEating = (0.0002 * tile.animals)
          if (animalsEating > tile.vegetation) {
            //starvation
            //tile.animals -= Math.ceil(10*(animalsEating-tile.vegetation))
            tile.animals = (tile.animals * 0.995)-1;
            tile.vegetation = 0;
          } else {
            tile.vegetation -= animalsEating;
          }
          var vegetationChange = 0.0001 + (0.00025 * tile.vegetation * timeinticks)

          tile.trees = Math.min(tile.treesSpace,
            (tile.trees + treeChange))
          tile.trees = Math.max(tile.trees, 0)

          if (tile.vegetation > 0) {
          tile.animals = Math.min(tile.animalsSpace,
            (tile.animals + 0.000001 + (0.000001*tile.animals * timeinticks)))
          }
          tile.animals = Math.max(tile.animals, 0)

          tile.vegetation = Math.min(tile.vegetationSpace,
            (tile.vegetation + vegetationChange))
          tile.vegetation = Math.max(tile.vegetation, 0)

          tile.water = Math.max(tile.water - 
          ((0.0001*tile.vegetation+0.0001*tile.animals+0.0001*tile.trees)*timeinticks),0)

         // return tile
        })
        })
        draft.oxygen = Math.max(0,draft.oxygen+totalO2)
        draft.co2 = Math.max(0,draft.co2+totalCO2)
        draft.lastTick = new Date(action.time.getTime())

        draft.selectedTile = draft.tilemap[draft.selectedTile.y][draft.selectedTile.x]
        return
    }
  }, newGameMap
)

export default gameMap
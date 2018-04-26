import { combineReducers } from 'redux'
import gameMap from './gameMap'
import player from './player'

export default combineReducers({
  gameMap,
  player
});
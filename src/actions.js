// action types

export const CREATE_MAP = 'CREATE_MAP';
export const TILE_DETAILS = 'TILE_DETAILS';
export const UPDATE_TICK = 'UPDATE_TICK';

// other constants

// action creators

export function createMap(width, height, seed) {
    return { type: CREATE_MAP, data: {width: width, height: height, seed: seed }}
  }

export function tileDetails(x,y) {
  return { type: TILE_DETAILS, tile: {x: x, y: y} }
}

export function updateTick() {
  return { type: UPDATE_TICK, time: new Date()}
}
// action types

export const CREATE_MAP = 'CREATE_MAP';
export const TILE_DETAILS = 'TILE_DETAILS';

// other constants

// action creators

export function createMap(width, height, seed) {
    return { type: CREATE_MAP, data: {width: width, height: height, seed: seed }}
  }

export function tileDetails(x,y) {
  return { type: TILE_DETAILS, tile: {x: x, y: y} }
}
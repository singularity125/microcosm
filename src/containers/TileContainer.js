import { connect } from 'react-redux'
import { tileDetails } from '../actions'
import VisualTile from '../components/VisualTile'

// const getTile = (x, y, map) => ({
//     map.get({x: x, y: y})
// }) 

const mapStateToProps = (state, ownProps) => {
    return {
        x: ownProps.x,
        y: ownProps.y,
        tile: state.gameMap.get("tilemap").get(ownProps.x+","+ownProps.y)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
}

export default connect(
    mapStateToProps,
)(VisualTile)
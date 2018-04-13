import { connect } from 'react-redux'
import VisualTile from '../components/VisualTile'

// const getTile = (x, y, map) => ({
//     map.get({x: x, y: y})
// }) 

const mapStateToProps = (state, ownProps) => {
    return {
        x: ownProps.x,
        y: ownProps.y,
        tile: state.gameMap.tilemap.get(ownProps.x+","+ownProps.y)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

export default connect(
    mapStateToProps
)(VisualTile)
import { connect } from 'react-redux'
import { tileDetails,
    createMap } from '../actions';
import MapGrid from '../components/MapGrid';
const { Map } = require('immutable')

const mapStateToProps = (state, ownProps) => ({
        tilemap: state.gameMap.get("tilemap"),
        width: state.gameMap.get("width"),
        height: state.gameMap.get("height"),
        selectedTile: state.gameMap.get("selectedTile")
    }
)

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch,
        tileDetails
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapGrid)
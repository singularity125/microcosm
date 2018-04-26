import { connect } from 'react-redux'
import { tileDetails,
    createMap } from '../actions';
import MapGrid from '../components/MapGrid';

const mapStateToProps = (state, ownProps) => ({
        tilemap: state.gameMap["tilemap"],
        width: state.gameMap["width"],
        height: state.gameMap["height"],
        selectedTile: state.gameMap["selectedTile"]
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
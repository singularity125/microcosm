import { connect } from 'react-redux'
import { CREATE_MAP,
    createMap } from '../actions';
import MapGrid from '../components/MapGrid';

const mapStateToProps = (state, ownProps) => ({
        tilemap: state.gameMap.tilemap,
        width: state.gameMap.width,
        height: state.gameMap.height,
    }
)

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

export default connect(
    mapStateToProps
)(MapGrid)
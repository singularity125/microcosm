import { connect } from 'react-redux'
import TileDetails from '../components/TileDetails'

const mapStateToProps = (state, ownProps) => {
    return {
        tile: state.gameMap.selectedTile,
        lastTick: state.gameMap.lastTick
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

export default connect(
    mapStateToProps
)(TileDetails)
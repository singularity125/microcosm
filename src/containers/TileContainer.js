import { connect } from 'react-redux'
import { tileDetails } from '../actions'
import VisualTile from '../components/VisualTile'

const mapStateToProps = (state, ownProps) => {
    return {
        x: ownProps.x,
        y: ownProps.y,
        tile: state.gameMap["tilemap"][ownProps.y][ownProps.x]
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
}

export default connect(
    mapStateToProps,
)(VisualTile)
import { connect } from 'react-redux'
import RightMenu from '../components/RightMenu'

const mapStateToProps = (state, ownProps) => {
    var tilex = state.gameMap["selectedTile"].x
    var tiley = state.gameMap["selectedTile"].y
    return {
        selectedTile: state.gameMap["selectedTile"]
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

export default connect(
    mapStateToProps
)(RightMenu)
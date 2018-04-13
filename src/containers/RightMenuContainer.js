import { connect } from 'react-redux'
import RightMenu from '../components/RightMenu'

// const getTile = (x, y, map) => ({
//     map.get({x: x, y: y})
// }) 

const mapStateToProps = (state, ownProps) => {
    return {
        selectedTile: state.gameMap.get("selectedTile")
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

export default connect(
    mapStateToProps
)(RightMenu)
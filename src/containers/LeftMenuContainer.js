import { connect } from 'react-redux'
import LeftMenu from '../components/LeftMenu'

const mapStateToProps = (state, ownProps) => {
    return {
        player: state.player,
        oxygen: state.gameMap.oxygen,
        otherair: state.gameMap.otherair,
        co2: state.gameMap.co2,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

export default connect(
    mapStateToProps
)(LeftMenu)
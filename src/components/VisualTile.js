import React, { Component } from 'react'
import PropTypes from 'prop-types'

//const VisualTile = (props) => (
class VisualTile extends Component {
  handleClick = () => {
     this.props.dispatch(this.props.onClick(this.props.x, this.props.y))
  }

  render() {
    return (
      <button key={this.props.key} onClick={this.handleClick}>({this.props.x},{this.props.y})</button>
    )
  }
}

// VisualTile.propTypes = {
//   x: PropTypes.number.isRequired,
//   y: PropTypes.number.isRequired
// }

export default VisualTile
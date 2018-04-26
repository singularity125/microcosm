import React, {Component} from 'react'

class LeftMenu extends Component {

  render() {
    var airtotal = (this.props.oxygen + this.props.co2 + this.props.otherair)
    return (
    <div className="LeftMenu-div">
      <h1 className="LeftMenu-header">Base Stats:</h1>
      <h3>Warden Name: {this.props.player.name}</h3>
      <br/>
      <h3>Atmosphere Stats:</h3>
      <p>Oxygen: {(100 * this.props.oxygen / airtotal).toFixed(2)}%</p>
      <p>CO2: {(100 * this.props.co2 / airtotal).toFixed(2)}%</p>
      <p>Nitrogen/Other: {(100 * this.props.otherair / airtotal).toFixed(2)}%</p>
      <h3>Currently Stored</h3>
      {this.props.player.storage.map((item) => {
        return (<p key={item.name}>{item.name}: {item.amount}</p>)
      })}
    </div>
    )
  }
}

export default LeftMenu
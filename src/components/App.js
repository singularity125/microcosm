import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CREATE_MAP,
    createMap } from '../actions';
import TopMenu from './TopMenu'
import MapGridContainer from '../containers/MapGridContainer'

import '../bootstrap-theme.css';
import '../App.css';

class App extends Component {
    constructor(props) {
        super(props);
      }
    
      componentWillMount() {
        //this.dispatch.createMap(5,5,123)
      }
    
      componentWillUnmount() {
        
      }
   render() {
    return (
    <div className="App">
    <div className="Game-div">
        <TopMenu />
        <hr />
        <div className="Game-map">
            <h1>There should be a map here...</h1>
            <MapGridContainer />
        </div>
    </div>
    </div>
   )
   }
}

const mapStateToProps = (state, ownprops) => ({})
const mapDispatchToProps = (dispatch, ownprops) => ({
    createMap
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
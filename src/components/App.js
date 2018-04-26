import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CREATE_MAP,
    createMap } from '../actions';
import TopMenu from './TopMenu'
import RightMenu from './RightMenu'
import TileDetailsContainer from '../containers/TileDetailsContainer'
import RightMenuContainer from '../containers/RightMenuContainer'
import MapGridContainer from '../containers/MapGridContainer'

import '../bootstrap-theme.css';
import '../App.css';
import LeftMenuContainer from '../containers/LeftMenuContainer';

class App extends Component {
    // constructor(props) {
    //     super(props);
    //   }
    
    //    componentWillMount() {
    //      this.dispatch.createMap(5,5,123)
    //    }
    
    //   componentWillUnmount() {
        
    //   }

   render() {
    return (
    <div className="App">
    <div className="Game-div">
        <div className="row">
            <div className="col-md-12"><TopMenu /></div>
        </div>
        <div className="row" >
            <div className="col-md-4">
                <LeftMenuContainer />
            </div>
            <div className="col-md-4">
                <div className="Game-map">
                    <h2>Facility Map</h2>
                    <MapGridContainer />
                </div>
            </div>
            <div className="col-md-4">
                <RightMenuContainer />
            </div>
        </div>
    </div>
    </div>
   )
   }
}

export default connect()(App)
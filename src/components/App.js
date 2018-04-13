import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CREATE_MAP,
    createMap } from '../actions';
import TopMenu from './TopMenu'
import RightMenuContainer from '../containers/RightMenuContainer'
import MapGridContainer from '../containers/MapGridContainer'

import '../bootstrap-theme.css';
import '../App.css';

class App extends Component {
    // constructor(props) {
    //     super(props);
    //   }
    
    //   componentWillMount() {
    //     //this.dispatch.createMap(5,5,123)
    //   }
    
    //   componentWillUnmount() {
        
    //   }

   render() {
    return (
    <div className="App">
    <div className="Game-div">
        <div className="row">
            <div className="col-md-12"><TopMenu /></div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <h1>Left Menu</h1>
            </div>
            <div className="col-md-4">
                <div className="Game-map">
                    <h1>There should be a map here...</h1>
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

export default App
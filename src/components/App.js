import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <h1 className="text-center">Stock-Charts</h1> 
            <SearchBar/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            Placeholder for chart
          </div>
        </div>
      </div>
    );
  }
}

export default App;

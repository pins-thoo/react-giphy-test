import React, { Component } from 'react';
import SearchBar from './searchBar';

class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
        </div>
        <div className="right-scene">Right</div>
      </div>
    );
  }
}

export default App;

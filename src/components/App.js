import React, { Component } from 'react';
import './App.css';
import ActionButton from './ActionButtons';
import Header from './Header'

class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <ActionButton></ActionButton>
        </header>
      </div>
    );
  }
}

export default App;

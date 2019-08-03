import React, { Component } from 'react';
import './App.css';
import ActionButton from './ActionButtons';
import Input from './Input'

class App extends Component {

  constructor(){
    super();
    this.state = {
      addbutton: false
    }
    this.addFunction = this.addFunction.bind(this);
  }

  addFunction(){
    console.log('testing')
    this.setState({
      addbutton : true
    })
  }

  render() {
    
    console.log('addbutton', this.state.addbutton)
    return (
      <div className="App">
        <header className="App-header">
          <ActionButton></ActionButton>
          {/* <button onClick={this.addFunction}>add</button> */}
          {this.state.addbutton
          ?<Input add={this.state.addbutton}></Input>
          :null}
        </header>
      </div>
    );
  }
}

export default App;

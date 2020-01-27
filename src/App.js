import React, { Component } from 'react';
import './App.css';
import TextInput from './components/TextInput';

class App extends Component {

  // constructor(props){
  //     super(props);
  // }

  render(){
    return (
      <div>
        <div className="App">
          <TextInput />
        </div>
      </div>
    );
  }
}

export default App;

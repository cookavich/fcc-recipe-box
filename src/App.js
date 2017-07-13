import React, { Component } from 'react';
import './App.css';
import RecipeList from './components/RecipeList.js';

class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {

  }

  render() {
    return (
      <div className="App">
        <h1>hey</h1>
        <RecipeList/>
        <button onClick={this.handleClick}>
          Add Recipe
        </button>
      </div>
    );
  }
}

export default App;

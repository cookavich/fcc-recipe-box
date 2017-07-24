import React, {Component} from 'react';
import './App.css';
import {RecipeForm, RecipeList} from './components';
class App extends Component {
    constructor() {
        super();
        this.state = {
            showRecipeForm: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({showRecipeForm: true});
    }



    render() {
        return (
            <div className="App">
                <h1>Recipe Box</h1>
                <RecipeList/>
                <button onClick={this.handleClick}>
                    Add Recipe
                </button>
                {this.state.showRecipeForm && <RecipeForm type="add"/>}
            </div>
        );
    }
}

export default App;

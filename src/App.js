import React, {Component} from 'react';
import './App.css';
import {RecipeForm, RecipeList} from './components';
import {addRecipe, generateId, findById, updateRecipe, removeRecipe} from './lib/recipeHelpers';
class App extends Component {
    constructor() {
        super();
        this.state = {
            showRecipeForm: false,
            recipes: []
        };
    }

    handleClick = () => {
        this.setState({showRecipeForm: true});
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        const newId = '';
    };

    render() {
        return (
            <div className="App">
                <h1>Recipe Box</h1>
                <RecipeList/>
                <button onClick={this.handleClick}>
                    Add Recipe
                </button>
                {this.state.showRecipeForm && <RecipeForm type="add" />}
            </div>
        );
    }
}

export default App;

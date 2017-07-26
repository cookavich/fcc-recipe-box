import React, {Component} from 'react';
import './App.css';
import {RecipeForm, RecipeList} from './components';
import {addRecipe, generateId, findById, updateRecipe, removeRecipe} from './lib/recipeHelpers';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showRecipeForm: false,
            recipes: [
                {id: 1, title: 'BLT', ingredients: ["Bacon", "Lettuce", "Tomato"]},
                {id: 2, title: 'Pizza', ingredients: ["Dough", "Tomato Sauce", "Cheese", "Pepperoni"]},
                {id: 3, title: 'Congri', ingredients: ["Rice", "Black Beans"]}
            ],
            currentRecipe: {name: '', ingredients: ''},
            errorMessage: ''
        };
    }

    handleRemove = (id, evt) => {
        evt.preventDefault();
        const updatedRecipes = removeRecipe(this.state.recipes, id);
        this.setState({recipes: updatedRecipes});
    };

    handleClick = () => {
        this.setState({showRecipeForm: true});
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        const newId = generateId();
        const newRecipe = {
            id: newId,
            name: this.state.currentRecipe.name,
            ingredients: this.state.currentRecipe.ingredients.split(', ')
        };
        const updatedRecipes = addRecipe(this.state.recipes, newRecipe);
        this.setState({
            showRecipeForm: false,
            recipes: updatedRecipes,
            currentRecipe: {name: '', ingredients: ''},
            errorMessage: ''
        })
    };


    handleEmptySubmit = (evt) => {
        evt.preventDefault();
        this.setState({
            errorMessage: 'You have to fill out the whole recipe!'
        })
    };

    handleInputChange = (evt) => {
        this.setState({
            ...this.state,
            currentRecipe: {
                ...this.state.currentRecipe,
                [evt.target.name]: evt.target.value
            }
        })
    };

    render() {
        const submitHandler = this.state.currentRecipe ? this.handleSubmit : this.state.handleEmptySubmit;
        return (
            <div className="App">
                <h1>Recipe Box</h1>
                <RecipeList
                    recipes={this.state.recipes}
                    handleRemove={this.handleRemove} />
                <button onClick={this.handleClick}>
                    Add Recipe
                </button>
                {this.state.showRecipeForm && <RecipeForm
                    type="add"
                    handleInputChange={this.handleInputChange}
                    handleSubmit={submitHandler}
                    currentRecipe={this.state.currentRecipe}/>}
            </div>
        );
    }
}

export default App;

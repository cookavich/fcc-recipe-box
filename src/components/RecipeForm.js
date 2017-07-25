import React from 'react';
import PropTypes from 'prop-types';

export class RecipeForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit() {
        if(this.state.name !== '' && this.state.ingredients !== '') {
            const recipeBox = JSON.parse(localStorage.getItem('recipeBox'));
            const recipeToAdd = {
                name: this.state.name,
                ingredients: this.state.ingredients.split(',')
            };
            recipeBox.push(recipeToAdd);
            localStorage.setItem('recipeBox', JSON.stringify(recipeBox));
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.props.type === 'add'
                    ? <h3>Add a Recipe</h3>
                    : <h3>Edit Recipe</h3>
                }
                <label>
                    Recipe Name
                    <input
                        type="text"
                        name="name"
                        onChange={this.handleInputChange} />
                </label>
                <label>
                    Ingredients
                    <textarea
                        name="ingredients"
                        onChange={this.handleInputChange} />
                </label>
                {this.props.type === 'add'
                    ? <input type="submit" value="Add Recipe"/>
                    : <input type="submit" value="Edit Recipe"/>
                }
                <span type="submit" value="Cancel"/>
            </form>
        )
    }
}

RecipeForm.propTypes = {
    type: PropTypes.string.isRequired,
};


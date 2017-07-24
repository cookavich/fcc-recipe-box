import React from 'react';
import PropTypes from 'prop-types';

class RecipeForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log(event);
        event.preventDefault();
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
                    <input type="text" name="name"/>
                </label>
                <label>
                    Ingredients
                    <textarea name="ingredients"/>
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
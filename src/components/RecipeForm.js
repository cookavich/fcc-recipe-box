import React from 'react';
import PropTypes from 'prop-types';

export const RecipeForm = (props) => (
            <form onSubmit={props.handleSubmit}>
                {props.type === 'add'
                    ? <h3>Add a Recipe</h3>
                    : <h3>Edit Recipe</h3>
                }
                <label>
                    Recipe Name
                    <input
                        type="text"
                        name="name"
                        onChange={props.handleInputChange}
                        value={props.currentRecipe.name}/>
                </label>
                <label>
                    Ingredients
                    <textarea
                        name="ingredients"
                        onChange={props.handleInputChange}
                        value={props.currentRecipe.ingredients}/>
                </label>
                {props.type === 'add'
                    ? <input type="submit" value="Add Recipe"/>
                    : <input type="submit" value="Edit Recipe"/>
                }
                <span type="submit" value="Cancel"/>
            </form>
        );

RecipeForm.propTypes = {
    type: PropTypes.string.isRequired,
};


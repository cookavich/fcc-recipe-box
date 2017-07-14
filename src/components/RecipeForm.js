import React from 'react';

export const RecipeForm = (props) => (
    <form>
        {props.type === 'add'
            ? <h3>Add a Recipe</h3>
            : <h3>Edit Recipe</h3>
        }
        <label>
            Recipe Name
            <input type="text" name="name"/>
        </label>
        <label>
            Ingredients
            <textarea name="ingredients" />
        </label>
    </form>);

RecipeForm.propTypes = {
    type: React.PropTypes.string.isRequired,
};
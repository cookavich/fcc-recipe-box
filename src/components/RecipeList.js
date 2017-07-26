import React from 'react';
import {partial} from '../../lib/utils';
const handleRemove = partial(props.handleRemove, props.id);

export const RecipeList = (props) => {
    const handleRemove = partial(props.handleRemove, props.id);
    return (
        <ul>
            {props.recipes.map(recipe => (
                    <li>
                        <h3>{recipe.title}</h3>
                        <div>
                            <p>Ingredients</p>
                            <ul>
                                {recipe.ingredients.map(ingredient => <li>{ingredient}</li>)}
                            </ul>
                        </div>
                        <button onClick={handleRemove}>Delete</button>
                    </li>
                )
            )}
        </ul>
    )
};
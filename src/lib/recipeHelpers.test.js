import {addRecipe, findById, updateRecipe, removeRecipe} from './recipeHelpers';

test('addRecipe should add the passed recipe to the list', () => {
    const startRecipes = [
        {id:1, title: 'one', ingredients: ["Bacon", "Lettuce", "Tomato"]},
        {id:2, title: 'two', ingredients: ["Bacon", "Lettuce", "Tomato"]},
    ];
    const newRecipe = {id:3, title: 'two', ingredients: ["Bacon", "Lettuce", "Tomato"]};
    const expectedRecipes = [
        {id:1, title: 'one', ingredients: ["Bacon", "Lettuce", "Tomato"]},
        {id:2, title: 'two', ingredients: ["Bacon", "Lettuce", "Tomato"]},
        {id:3, title: 'two', ingredients: ["Bacon", "Lettuce", "Tomato"]}
    ];

    const result = addRecipe(startRecipes, newRecipe);

    expect(result).toEqual(expectedRecipes)
});

test('addRecipe should not mutate the existing recipe array', () => {
    const startRecipes = [
        {id:1, title: 'one', ingredients: ["Bacon", "Lettuce", "Tomato"]},
        {id:2, title: 'two', ingredients: ["Bacon", "Lettuce", "Tomato"]},
    ];
    const newRecipe = {id:3, title: 'two', ingredients: ["Bacon", "Lettuce", "Tomato"]};
    const expectedRecipes = [
        {id:1, title: 'one', ingredients: ["Bacon", "Lettuce", "Tomato"]},
        {id:2, title: 'two', ingredients: ["Bacon", "Lettuce", "Tomato"]},
        {id:3, title: 'two', ingredients: ["Bacon", "Lettuce", "Tomato"]}
    ];

    const result = addRecipe(startRecipes, newRecipe);

    expect(result).not.toBe(startRecipes)
});

test('findById should return the expected item from an array', () => {
    const startRecipes = [
        {id:1, title: 'one', ingredients: ["Bacon", "Lettuce", "Tomato"]},
        {id:2, title: 'two', ingredients: ["Bacon", "Lettuce", "Tomato"]},
        {id:3, title: 'two', ingredients: ["Bacon", "Lettuce", "Tomato"]}
    ];

    const expected = {id:2, title: 'two', ingredients: ["Bacon", "Lettuce", "Tomato"]};

    const result = findById(2, startRecipes);

    expect(result).toEqual(expected)
});

test('updateRecipe should update an item by id', () => {
    const startRecipes = [
        {id:1, title: 'one', ingredients: ["Bacon", "Lettuce", "Tomato"]},
        {id:2, title: 'two', ingredients: ["Bacon", "Lettuce", "Tomato"]},
        {id:3, title: 'two', ingredients: ["Bacon", "Lettuce", "Tomato"]}
    ];
    const updated = {id:2, title: 'two', ingredients: ["Bacon", "Lettuce", "Tomato", "Turkey"]};
    const expectedRecipes = [
        {id:1, title: 'one', ingredients: ["Bacon", "Lettuce", "Tomato"]},
        {id:2, title: 'two', ingredients: ["Bacon", "Lettuce", "Tomato", "Turkey"]},
        {id:3, title: 'two', ingredients: ["Bacon", "Lettuce", "Tomato"]}
    ];

    const result = updateRecipe(startRecipes, updated);

    expect(result).toEqual(expectedRecipes)
});

test('updateRecipe should not mutate the original array', () => {
    const startRecipes = [
        {id:1, title: 'one', ingredients: ["Bacon", "Lettuce", "Tomato"]},
        {id:2, title: 'two', ingredients: ["Bacon", "Lettuce", "Tomato"]},
        {id:3, title: 'two', ingredients: ["Bacon", "Lettuce", "Tomato"]}
    ];
    const updated = {id:2, title: 'two', ingredients: ["Bacon", "Lettuce", "Tomato", "Turkey"]};

    const result = updateRecipe(startRecipes, updated);

    expect(result).not.toBe(startRecipes)
});

test('removeRecipe should remove the recipe by ID', () => {
    const startRecipes = [
        {id:1, title: 'one', ingredients: ["Bacon", "Lettuce", "Tomato"]},
        {id:2, title: 'two', ingredients: ["Bacon", "Lettuce", "Tomato"]},
        {id:3, title: 'two', ingredients: ["Bacon", "Lettuce", "Tomato"]}
    ];
    const expectedRecipes = [
        {id:1, title: 'one', ingredients: ["Bacon", "Lettuce", "Tomato"]},
        {id:3, title: 'two', ingredients: ["Bacon", "Lettuce", "Tomato"]}
    ];

    const result = removeRecipe(startRecipes, 2);

    expect(result).toEqual(expectedRecipes)
});

test('removeRecipe should not mutate the original array', () => {
    const startRecipes = [
        {id:1, title: 'one', ingredients: ["Bacon", "Lettuce", "Tomato"]},
        {id:2, title: 'two', ingredients: ["Bacon", "Lettuce", "Tomato"]},
        {id:3, title: 'two', ingredients: ["Bacon", "Lettuce", "Tomato"]}
    ];

    const result = removeRecipe(startRecipes, 2);

    expect(result).not.toBe(startRecipes)
});
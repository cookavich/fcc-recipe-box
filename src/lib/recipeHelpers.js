/**
 * Adds a new recipe to the recipes list
 * @param list
 * @param item
 */
export const addRecipe = (list, item) => [...list, item];

/**
 * Generates random id for a recipe
 */
export const generateId = () => Math.floor(Math.random() * 1000);

/**
 * Finds a recipe by ID
 * @param id
 * @param list
 */
export const findById = (id, list) => list.find(item => item.id === id);

/**
 * Updates a recipe
 * @param list
 * @param updated
 * @returns {[*,*,*]}
 */
export const updateRecipe = (list, updated) => {
    const updatedIndex = list.findIndex(item => item.id === updated.id);
    return [
        ...list.slice(0, updatedIndex),
        updated,
        ...list.slice(updatedIndex + 1)
    ]
};

export const removeRecipe = (list, id) => {
    const removeIndex = list.findIndex(item => item.id === id);
    return [
        ...list.slice(0, removeIndex),
        ...list.slice(removeIndex + 1)
    ]
};
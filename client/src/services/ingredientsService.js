import api from './api.js';


export const getByRecipe = (recipeId) => {
    return fetch(`${api.ingredientsCurrentRecipe}/${recipeId}`)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const remove = (recipeId, ingredientId) => {
    return fetch(`${api.deleteIngredientCurrentRecipe}?ingredientId=${ingredientId}&recipeId=${recipeId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }).catch(err => console.error(err));;
}

export const getAll = () => {
    return fetch(api.adminAllIngredients)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const removeFromAdmin = (id) => {
    return fetch(`${api.adminDeleteIngredient}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }).catch(err => console.error(err));
}
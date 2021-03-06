const baseUrl = 'https://localhost:44319/api';

const accountUrl = `${baseUrl}/account`
const recipesUrl = `${baseUrl}/recipes`;
const commentsUrl = `${baseUrl}/comments`;
const categoriesUrl = `${baseUrl}/categories`;
const usersUrl = `${baseUrl}/users`;
const ingredientsUrl = `${baseUrl}/ingredients`;

const adminBaseUrl = `${baseUrl}/admin`;
const adminIngredientUrl = `${adminBaseUrl}/ingredients`;
const adminCategoryUrl = `${adminBaseUrl}/categories`;

const api = {
    register: `${accountUrl}/register`,
    login: `${accountUrl}/login`,
    allCategories: `${categoriesUrl}/all`,
    allCategoriesNames: `${categoriesUrl}/allNames`,
    allRecipes: `${recipesUrl}/all`,
    createRecipe: `${recipesUrl}/create`,
    getRecipeForUpdate: `${recipesUrl}/recipeForUpdate`,
    updateRecipe: `${recipesUrl}/update`,
    deleteRecipe: `${recipesUrl}/delete`,
    orderRecipes: `${recipesUrl}/order`,
    detailsRecipe: `${recipesUrl}/details`,
    recipeLike: `${recipesUrl}/like`,
    recipeDislike: `${recipesUrl}/dislike`,
    recipesCurrentCategory: `${recipesUrl}/byCategory`,
    searchRecipe: `${recipesUrl}/search`,
    allCommentsCurrentRecipe: `${commentsUrl}/all`,
    createComment: `${commentsUrl}/create`,
    favouriteRecipes: `${usersUrl}/favourite`,
    ownRecipes: `${usersUrl}/own`,
    ingredientsCurrentRecipe: `${ingredientsUrl}/getByRecipe`,
    deleteIngredientCurrentRecipe: `${ingredientsUrl}/delete`,
    adminAllIngredients: `${adminIngredientUrl}/all`,
    adminDeleteIngredient: `${adminIngredientUrl}/delete`,
    adminGetIngredientForUpdate: `${adminIngredientUrl}/ingredientForUpdate`,
    adminUpdateIngredient: `${adminIngredientUrl}/update`,
    adminCreateIngredient: `${adminIngredientUrl}/create`,
    adminAllCategories: `${adminCategoryUrl}/all`,
    adminDeleteCategory: `${adminCategoryUrl}/delete`,
    adminGetCategoryForUpdate: `${adminCategoryUrl}/categoryForUpdate`,
    adminUpdateCategory: `${adminCategoryUrl}/update`,
    adminCreateCategory: `${adminCategoryUrl}/create`,
}

export default api;
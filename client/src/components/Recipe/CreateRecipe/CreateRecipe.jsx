import { useState, useEffect } from 'react';
import { produce } from 'immer';
import { generate } from 'shortid';

import * as categoriesService from '../../../services/categoriesService.js';

import './CreateRecipe.css';

function CreateRecipe() {
    const [categories, setCategories] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        categoriesService.getAllNames()
            .then(categories => setCategories(categories));
    }, []);

    const addIngredient = () => {
        setIngredients(prevState => [...prevState, {
            id: generate(),
            name: '',
            quantity: ''
        }]);
    };

    const removeIngredient = (i) => {
        console.log(i);
        setIngredients(currentIngredient => currentIngredient.filter(x => x.id !== i.id));
    };

    const changeIngredientNameHandler = (e) => {
        const name = e.target.value;
        const startIndex = (e.target.id).indexOf('[') + 1;
        const endIndex = (e.target.id).indexOf(']');
        const ingredientIndex = (e.target.id).slice(startIndex, endIndex);
        
        setIngredients(currentIngredient => produce(currentIngredient, v => {
            v[ingredientIndex].name = name;
        }));
    }

    const changeIngredientQunatityHandler = (e) => {
        const quantity = e.target.value;
        const startIndex = (e.target.id).indexOf('[') + 1;
        const endIndex = (e.target.id).indexOf(']');
        const ingredientIndex = (e.target.id).slice(startIndex, endIndex);
        
        setIngredients(currentIngredient => produce(currentIngredient, v => {
            v[ingredientIndex].quantity = quantity;
        }));
    }

    const onCreateRecipeSubmitHandler = (e) => {
        e.preventDefault();
        console.log("in submit");
        console.log(ingredients);
    }

    return (
        <div className="create-recipe-wrapper" >
            <div className="fill pt-2 pb-2"></div>
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1 className="create-recipe-title cursive-font-style">Create New Recipe</h1>
                    </div>
                </div>
                <form onSubmit={onCreateRecipeSubmitHandler}>
                    <div className="row space-top">
                        <div className="col-lg-8">
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="title">Title</label>
                                <input className="form-control" id="title" type="text" />
                            </div>
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="content">Content</label>
                                <textarea className="form-control" id="content" type="text" cols="10" rows="7"></textarea>
                            </div>
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="portions">Portions</label>
                                <input className="form-control" id="portions" type="number" />
                            </div>
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="preparationTime">Preparation Time in minutes</label>
                                <input className="form-control" id="preparationTime" type="number" />
                            </div>
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="cookingTime">Cooking time in minutes</label>
                                <input className="form-control" id="cookingTime" type="number" />
                            </div>
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="categoryName">Category</label>
                                <select className="form-control" id="categoryName">
                                    <option disabled>Please select one of the options below</option>
                                    {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="picture">Picture url</label>
                                <input className="form-control" id="picture" type="url" />
                            </div>
                            <hr />
                            <label className="fonts-bold">Ingredients: </label>
                            {ingredients.map((i, ci) => {
                                const index = `ingredients[${ci}]`;
                                return (
                                    <div key={i.id}>
                                        <label className="form-control-label custom-color-green">Ingredient: </label>
                                        <div className="form-group">
                                            <label className="form-control-label" htmlFor={`${index}.name`}>Name</label>
                                            <input onChange={changeIngredientNameHandler} className="form-control" id={`${index}.name`} type="text" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-control-label" htmlFor={`${index}.quantity`}>Quantity</label>
                                            <input onChange={changeIngredientQunatityHandler} className="form-control" id={`${index}.quantity`} type="text" />
                                        </div>
                                        <button onClick={removeIngredient}>Remove</button>
                                    </div>
                                )
                            })}
                            <button type="button" className="btn btn-primary custom-color-blue" onClick={addIngredient}> Add ingredient</button >
                            <hr />
                            <button type="submit" className="btn btn-secondary"> Create</button >
                        </div >
                    </div >
                </form >
            </div >
            <div className="fill pt-2 pb-2"></div>
        </div >
    );
}

export default CreateRecipe;
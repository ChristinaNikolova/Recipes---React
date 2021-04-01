import { useState, useEffect } from 'react';

import Input from '../../../shared/Input/Input.jsx';
import * as validator from '../../../../utils/validations/ingredientValidator.js';
import * as ingredientsService from '../../../../services/ingredientsService.js';

import './IngredientAdminUpdate.css';

function IngredientAdminUpdate({ match, history }) {
    const [ingredient, setIngredient] = useState({});
    const [errorName, setErrorName] = useState('');
    const id = match.params.id;

    useEffect(() => {
        ingredientsService
            .getIngredientForUpdate(id)
            .then(ingredient => setIngredient(ingredient))
    }, []);

    const updateIngredientSubmitHandler = (e) => {
        e.preventDefault();
        const name = e.target.name.value;

        setErrorName(validator.validName(name));

        if (validator.validName(name) === '') {

            ingredientsService
                .update(id, name)
                .then(() => {
                    history.push(`/admin/ingredients`);
                    return;
                });
        }
    }

    return (
        <div className="update-ingredient-wrapper">
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1 className="cursive-font-style p-2">Update Ingredient</h1>
                        <hr />
                    </div>
                </div>
                <form className="update-ingredient-form" onSubmit={updateIngredientSubmitHandler}>
                    <div className="row space-top">
                        <div className="col-lg-8">
                            <div className="form-group">
                                <Input
                                    type='text'
                                    name='name'
                                    label='Name'
                                    value={ingredient.name}
                                    error={errorName}
                                />
                            </div>
                            <button className="btn btn-secondary" type="submit">Update</button>
                        </div>
                    </div >
                </form >
            </div >
        </div >
    );
}

export default IngredientAdminUpdate;
import { useState, useEffect } from 'react';

import Input from '../../../shared/Input/Input.jsx';
import * as categoriesService from '../../../../services/categoriesService.js';
import * as validator from '../../../../utils/validations/categoryValidator.js';

import './CategoryAdminUpdate.css';

function CategoryAdminUpdate({ match, history }) {
    const [category, setCategory] = useState({});
    const [errorName, setErrorName] = useState('');
    const [errorPicture, setErrorPicture] = useState('');
    const id = match.params.id;

    useEffect(() => {
        categoriesService
            .getCategoryForUpdate(id)
            .then(category => setCategory(category))
    }, []);

    const updateCategorySubmitHandler = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const picture = e.target.picture.value;

        setErrorName(validator.validName(name));
        setErrorPicture(validator.validPicture(picture));

        if (validator.validName(name) === '' &&
            validator.validPicture(picture) === '') {
            categoriesService
                .update(id, name, picture)
                .then(() => {
                    history.push(`/admin/categories`);
                    return;
                });
        }
    }

    return (
        <div className="update-category-wrapper">
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1 className="cursive-font-style p-2">Update Category</h1>
                        <hr />
                    </div>
                </div>
                <form className="update-category-form" onSubmit={updateCategorySubmitHandler}>
                    <div className="row space-top">
                        <div className="col-lg-8">
                            <Input
                                type='text'
                                name='name'
                                label='Name'
                                value={category.name}
                                error={errorName} />

                            <Input
                                type='url'
                                name='picture'
                                label='Picture'
                                value={category.picture}
                                error={errorPicture} />

                            <button className="btn btn-secondary" type="submit">Update</button>
                        </div>
                    </div >
                </form >
            </div >
        </div >
    );
}

export default CategoryAdminUpdate;
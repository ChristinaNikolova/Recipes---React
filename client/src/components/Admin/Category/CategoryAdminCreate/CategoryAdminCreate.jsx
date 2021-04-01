import { useState } from 'react';

import Input from '../../../shared/Input/Input.jsx';
import * as categoriesService from '../../../../services/categoriesService.js';
import * as validator from '../../../../utils/validations/categoryValidator.js';

import './CategoryAdminCreate.css';

function CategoryAdminCreate({ history }) {
    const [errorName, setErrorName] = useState('');
    const [errorPicture, setErrorPicture] = useState('');

    const onCreateCategorySubmitHandler = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const picture = e.target.picture.value;

        setErrorName(validator.validName(name));
        setErrorPicture(validator.validPicture(picture));

        if (validator.validName(name) === '' &&
            validator.validPicture(picture) === '') {
            categoriesService
                .create(name, picture)
                .then(() => {
                    history.push('/admin/categories');
                    return;
                });
        }
    }

    return (
        <div className="create-category-wrapper">
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1 className="cursive-font-style p-2">Create New Category</h1>
                        <hr />
                    </div>
                </div>
                <form className="create-category-form" onSubmit={onCreateCategorySubmitHandler}>
                    <div className="row space-top">
                        <div className="col-lg-8">
                            <Input
                                type='text'
                                name='name'
                                label='Name'
                                error={errorName} />

                            <Input
                                type='url'
                                name='picture'
                                label='Picture'
                                error={errorPicture} />

                            <button className="btn btn-secondary" type="submit">Create</button>
                        </div>
                    </div >
                </form >
            </div>
        </div >
    );
}

export default CategoryAdminCreate;
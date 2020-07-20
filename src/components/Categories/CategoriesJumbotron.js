import React from 'react'
import { Jumbotron } from 'reactstrap'
import { Link } from 'react-router-dom';
import * as Routes from '../../Routes/Routes';

export const CategoriesJumbotron = () => {
    return (
        <Jumbotron>
            <h1>CategoriesJumbotron</h1>
            <Link className='btns' to={Routes.CategoriesForm}>Add Categories</Link>
    </Jumbotron>
    )
}

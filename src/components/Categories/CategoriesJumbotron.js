import React from 'react'
import { Jumbotron } from 'reactstrap'
import { Link } from 'react-router-dom';
import * as Routes from '../../Routes/Routes';

export const CategoriesJumbotron = () => {
    return (
        <Jumbotron className='Jumbotron' data-aos="fade-left" data-aos-delay="80">
            <h1>Categories List</h1>
            <p>List Of All Your Categories</p>
            <Link className='btns' to={Routes.CategoriesForm}>Add Categories</Link>
    </Jumbotron>
    )
}

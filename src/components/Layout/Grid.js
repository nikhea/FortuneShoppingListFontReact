import React from 'react'
import CategoriesItems  from '../Categories';
import SingleCategories from '../Categories/SingleCategories';
import Routes from '../../Routes/Index'
 const Grid = () => {
    return (
        <div className="Grid">
            <CategoriesItems/>
            <SingleCategories/>
        </div>
    )
}
export default Grid
import React from 'react';

const categoriesItems = ({ categorie: { name, _id, items, date, resquest: { url } } }) => {
    
    return (
        <div>
            <h1>{name}</h1>
           
        </div>
    )
};

export default categoriesItems;

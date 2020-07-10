import React from 'react'

const ItemItems = ({ item}) => {
   const {name} =item

    
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default ItemItems

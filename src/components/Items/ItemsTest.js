import React, { Component } from 'react';
import ItemsItem from './ItemItems';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import * as Routes from '../../Routes/Routes'
class ItemsList extends Component {
    state = {  }
    render() { 
        const CID = this.props.Cid
        return ( 
            <div>
                	<Link to={Routes.ItemsForm}>Add Item</Link>
                { this.props.items.length <= 0 ?
                    'No Items Pls for this Categorie please Add'
                    
                    : 
                    this.props.items.map(item => (
                       <ItemsItem cid= {CID} key={item._id} item={item}/>
                    ))
               }
            </div>
         );
    }
}
 
export default (ItemsList);
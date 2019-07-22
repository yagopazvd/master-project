import React, { Component } from 'react';
import CollectionPreview from '../../components/preview-collection/CollectionPreview.component';
import SHOP_DATA from './Shop.data';

class ShopPage extends Component {
    state = { collections: SHOP_DATA }
    render() { 
        const listCollections = this.state.collections
        .map(collection => (
            <CollectionPreview key={collection.id} title={collection.title} items={collection.items}/>
        ))
        return ( 
            <div className="shop-page">
                {listCollections}
            </div>
         );
    }
}
 
export default ShopPage;
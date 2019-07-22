import React from 'react';

import CollectionItem from '../collection-item/CollectionItem.component';

import './CollectionPreview.styles.scss';


const CollectionPreview = (props) => (
    <div className="collection-preview">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <div className="preview">
            {
                props.items
                .filter((item, idx) => idx < 4)
                .map(item => (
                    <CollectionItem 
                    key={item.id} 
                    name={item.name} 
                    imageUrl={item.imageUrl}
                    price={item.price}
                    />
                ))
            }
        </div>
    </div>
)



export default CollectionPreview;
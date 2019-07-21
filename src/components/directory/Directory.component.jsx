import React, { Component } from 'react';
import './Directory.styles.scss';
import MenuItem from '../menu-item/MenuItem.component';

class Directory extends Component {
    state = { sections:[
        {
            title:'hats',
            imageUrl : 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1
        },
        {
            title:'jackets',
            imageUrl : 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2
        },
        {
            title:'sneakers',
            imageUrl : 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3
        },
        {
            title:'womens',
            imageUrl : 'https://i.ibb.co/GCCdy8t/womens.png',
            size:'large',
            id: 4
        },
        {
            title:'mens',
            imageUrl : 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5
        },
    ] }
    render() { 
        const sections = this.state.sections.map(section => (
            <MenuItem 
            key={section.id} 
            title={section.title} 
            image={section.imageUrl}
            size={section.size} 
            />
        ))
        return ( 
            <div className="directory-menu">
                {sections}
            </div>
         );
    }
}
 
export default Directory;
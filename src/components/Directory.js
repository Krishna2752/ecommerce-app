import './DirectoryStyles.scss'
import MenuItem from './MenuItem';
import React, { Component } from 'react'

export class Directory extends Component {
    constructor(){
        super();
        this.state = {
            sections: [ 
                {
                  title: 'hats',
                  imageUrl: 'https://media.gq.com/photos/5a04f9a398002d2e253679f5/master/pass/fall-hats-gq-style-0816-01-1.jpg',
                  id: 1,
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81x7qcfAr5L._UX425_.jpg',
                  id: 2,
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                },
                {
                  title: 'women',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                },
                {
                  title: 'men',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                }
              ]
              
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({title,id,imageUrl,size}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />


                ))}
                
            </div>
        );
    }
}

export default Directory

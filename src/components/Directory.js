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
                  linkUrl: 'hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81x7qcfAr5L._UX425_.jpg',
                  id: 2,
                  linkUrl: ''

                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: ''

                },
                {
                  title: 'women',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: ''


                },
                {
                  title: 'men',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: ''

                }
              ]
              
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({id,...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />


                ))}
                
            </div>
        );
    }
}

export default Directory

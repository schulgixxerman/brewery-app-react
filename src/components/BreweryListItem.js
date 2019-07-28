import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class BreweryListItem extends Component {
    render() {
        const { id, name, brewery_type, street, city, state, postal_code, country, website_url } = this.props.brewList;
        return (
            //inline styles use double {{}}
            <div className="brewBorder">
                <Link to= {name}>Details</Link>            
                <p>
                Name: { name }                
                </p>
                <p>
                Type: { brewery_type }
                </p>
                <p>
                Street: { street } 
                </p>
                <p>
                City:  { city }
                </p>
                <p>
                State: { state }
                </p>
                <p>
                Zip:   { postal_code }
                </p>
                <p>
                 Country:   { country }
                </p>
                <p>
                Website:    <a href={ website_url }> { website_url } </a>
                </p>
            </div>
        )
    }
}

export default BreweryListItem

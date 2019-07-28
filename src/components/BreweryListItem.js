import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class BreweryListItem extends Component {
    render() {
        const { id, name, brewery_type, street, city, state, postal_code, country, website_url } = this.props.brewList;
        return (
            //inline styles use double {{}}
            <div className="brewBorder">
                
                <span className="title">
                <Link className="linkTitle" to= {name}>{name} | { brewery_type }</Link>            
                </span>                                
                <p className="address">
                    <span className="addressTitle">Address:</span>
                <p>
                <p><span>{ street } </span></p>
                <p><span>{ city }, { state } </span></p>
                <span>{ postal_code } </span>
                <span>{ country } </span>
                </p>
                </p>

                <span className="webLink">
                <a href={ website_url }> { website_url } </a>
                </span>
            </div>
        )
    }
}

export default BreweryListItem

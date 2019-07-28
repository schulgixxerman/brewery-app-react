import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class BreweryDetailsItem extends Component {

    render() {
        const mapStyles = {
            width: '50%',
            height: '50%'
        };
        const { id, name, brewery_type, street, city, state, postal_code, country, latitude, longitude, website_url } = this.props.brewList;
        return (
   
            //inline styles use double {{}}
            //<div className="brewBorder" style={{ height: '100vh', width: '100%' }}>
                <div className="wrapper" style={{ height: '100vh', width: '100%' }}>                    
                <Link  to="/">Home</Link>
                <div className="firstDiv">
                <p>
                 { name }                
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
                     { latitude }
                 </p>
                 <p>
                     { longitude }
                 </p>
                <p>
                Website:    <a href={ website_url }> { website_url } </a>
                </p>
                    </div>  
                <div className="secondDiv">
                <Map // MAKE SURE TO CODE ERROR SITUATIONS WHEN NO LAT/LONG IS GIVEN
                     google={this.props.google}
                     zoom={14}
                     style={mapStyles}
                     initialCenter= {{ lat: latitude, lng: longitude }}
                />
                </div>
            }
            </div>
        )
    }
}

 export default GoogleApiWrapper({
     apiKey: 'AIzaSyCcPfw4fyHhXHdrzEVcuE-xxb9KC8Mi9Y8'
    })(BreweryDetailsItem);

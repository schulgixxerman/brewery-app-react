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
        const Marker = props => {
            return <div className="AwesomePin"></div>
        }

        return (                           
                <div className="" style={{ height: '100vh', width: '100%' }}>                                    
                <div className="firstDiv">
                <p>
                 <span class="detailsLinkTitle">{ name }                </span>
                </p>                
                <p>
                { street } 
                </p>
                <p>
                { city },  { state }
                </p>                            
                <p>
                { postal_code }
                </p>                
                <Link class="linkTitle" to="/">Home</Link>
                    </div>  
                <div className="secondDiv">
                <Map // TODO: CODE ERROR SITUATIONS WHEN NO LAT/LONG IS GIVEN
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

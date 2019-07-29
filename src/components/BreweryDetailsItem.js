import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

export class BreweryDetailsItem extends Component {

    render() {
        const mapStyles = {
            width: '50%',
            height: '50%'
        };
        const { id, name, street, city, state, postal_code, latitude, longitude, } = this.props.brewList;        
        this.showMap = false;
        if (latitude != null) {
            this.showMap = true;
        }
        return (                           
                <div className="" style={{ height: '100vh', width: '100%' }}>                                    
                    <div className="firstDiv">
                        <p><span class="detailsLinkTitle">{ name }</span></p>                
                        <p>{ street }</p>
                        <p>{ city },  { state }</p>                            
                        <p>{ postal_code }</p>                
                        <Link class="linkTitle" to="/">Home</Link>
                    </div>  
                <div className="secondDiv">
                    {this.showMap ? (
                        <Map 
                            google={this.props.google}
                            zoom={14}
                            style={mapStyles}
                            initialCenter= {{ lat: latitude, lng: longitude }}                                                                                                            
                        >
                            <Marker
                                onClick = { this.onMarkerClick }
                                title = { name }
                                position = {{ lat: latitude, lng: longitude }}
                                name = { name }
                            /> 
                        </Map>
                    ) : (
                    <p className="errorMessage">*** ERROR *** Latitude/Longitude values are not present in BreweryDB!</p>
                )}                                                                      
                </div>
            }
            </div>
        )
    }
}

 export default GoogleApiWrapper({
     apiKey: 'AIzaSyCcPfw4fyHhXHdrzEVcuE-xxb9KC8Mi9Y8'
    })(BreweryDetailsItem);
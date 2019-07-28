import React, { Component } from 'react'
import axios from 'axios';
import BreweryDetails from './BreweryDetails';

export class AppDetails extends Component {
    state = { 
        brewery: [
    
        ]
      }

    componentDidMount() {
      const { handle } = this.props.match.params        
      axios.get('https://api.openbrewerydb.org/breweries?by_name=' + handle).then(res => this.setState({ brewery: res.data }))
      }
      render() {
        return (
            <React.Fragment>
                <BreweryDetails brewList={this.state.brewery} />
            </React.Fragment>        
        )
      }
}

export default AppDetails
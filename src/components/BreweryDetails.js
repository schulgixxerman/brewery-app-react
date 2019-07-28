import React, { Component } from 'react';
import BreweryDetailsItem from './BreweryDetailsItem';

class BreweryDetails extends Component {
 
  render() {
  return  this.props.brewList.map((brewList) => (
    <BreweryDetailsItem brewList={brewList} />
  ));
}
}

export default BreweryDetails;

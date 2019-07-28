import React, { Component } from 'react';
import BreweryListItem from './BreweryListItem';

class BreweryList extends Component {
 
  render() {
  return  this.props.brewList.map((brewList) => (
    <BreweryListItem brewList={brewList} />
  ));
}
}

export default BreweryList;

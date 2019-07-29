import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import BreweryList from './components/BreweryList';
import BreweryDetailsApp from './components/BreweryDetailsApp';
import axios from 'axios';
import './App.scss';

class App extends Component {
  state = { 
    brewery: [

    ]
  }
  // load data from api by city = harrisburg
  componentDidMount() {
    axios.get('https://api.openbrewerydb.org/breweries?by_city=harrisburg').then(res => this.setState({ brewery: res.data }))
  }

render() {   
  return (  
    <Router>
      <Header />
      <div className>
      <div className="App">      
      <Route exact path="/" render={props => (
      <React.Fragment>                             
        <BreweryList brewList={this.state.brewery} />
      </React.Fragment>)} />
      <Route path='/:handle' component={BreweryDetailsApp} />      
    </div>
      </div>
    </Router>
  );
}
}
export default App;

import React, { Component } from 'react';
import './App.css';
import { getAllStarShips } from './services/sw-api';
import Starship from './components/Starship';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';

class App extends Component {
  state = {};

  async componentDidMount() {
    const starships = await getAllStarShips();
    console.log(starships.results);
    this.setState({
      ...starships.results
    })
  }
  
  render () {
    return(
      <div className="App">
      <header className="App-header"> Star Wars Starships</header>
      <Router>
        <Switch>
          <Route exact path='/'>
            <div className="container">
            {Object.keys(this.state).map((key, idx) =>
              <Link to={`/ships/${this.state[key].name}`} key={key} name={this.state[key].name}>{this.state[key].name}</Link>
            )}
            </div>
          </Route>
        {Object.keys(this.state).map((key, idx) =>
          <Route key={key} exact path={`/ships/${this.state[key].name}`}>
            <Starship key={key} name={this.state[key].name} model={this.state[key].model}/>
          </Route>
        )}
        </Switch>
        </Router>
    </div>
    );
  }
}

export default App;

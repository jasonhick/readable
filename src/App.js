import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Category from './views/Category';
import Post from './views/Post';
import * as Actions from './actions';
import * as Reducers from './reducers';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/category/:id" component={Category} />
            <Route exact path="/post/:id" component={Post} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps() {
  return {
    name: 'Jason',
  };
}

export default connect(mapStateToProps)(App);

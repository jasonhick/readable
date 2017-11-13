import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/header';
import Footer from './components/footer';
import Home from './views/Home';
import Category from './views/Category';
import Post from './views/Post';
import * as Actions from './actions';
import * as Reducers from './reducers';

const App = () => (
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

export default App;

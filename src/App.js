import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Category from './views/Category';
import Post from './views/Post';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="mt6">
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

export default App;

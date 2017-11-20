import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import CategoryView from '../views/category';
import PostContainer from '../components/post/container';

const App = () => (
  <div>
    <Header />
    <main className="mw8 center">
      <Switch>
        <Route exact path="/:category?" component={CategoryView} />
        <Route exact path="/:category/:postid" component={PostContainer} />
      </Switch>
    </main>
    <Footer />
  </div>
);

export default App;

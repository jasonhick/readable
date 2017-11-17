import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import HomeView from '../views/home';
import CategoryView from '../views/category';
import PostContainer from '../components/post/container';

const App = () => (
  <div>
    <Header />
    <main className="ph3 ph6-l">
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/:category" component={CategoryView} />
        <Route exact path="/:category/:post" component={PostContainer} />
      </Switch>
    </main>
    <Footer />
  </div>
);

export default App;

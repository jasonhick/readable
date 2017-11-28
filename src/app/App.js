import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CategoryView from '../views/category';
import Header from '../components/header';
import Footer from '../components/footer';
import PostContainer from '../components/post/container';
import PostForm from '../components/post/form';

const defaultFormProps = {
  isEditing: false,
};

const FormWithProps = () => (
  <PostForm
    post={defaultFormProps}
  />
);

const App = () => (
  <div>
    <Header />
    <main className="mw8 ph3 pt4 ph0-l center-l">
      <Switch>
        <Route exact path="/post/add" component={FormWithProps} />
        <Route exact path="/:category?" component={CategoryView} />
        <Route exact path="/:category/:postid" component={PostContainer} />
      </Switch>
    </main>
    <Footer />
  </div>
);

export default App;
